from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from database import SessionLocal
from models import RawData, CleanedData, AnalysisResults
from services.data_processing import clean_data
from services.analysis import calculate_stats, forecast_values
import io
from sqlalchemy import between
from datetime import datetime, timezone

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    db = SessionLocal()
    try:
        # Start transaction
        with db.begin():
            contents = await file.read()
            df = pd.read_csv(io.StringIO(contents.decode('utf-8')))
            
            # Bulk insert for better performance
            db.bulk_insert_mappings(
                RawData,
                df.to_dict(orient='records')
            )
            
            cleaned_df = clean_data(df)
            db.bulk_insert_mappings(
                CleanedData,
                cleaned_df.to_dict(orient='records')
            )

            # Commit transaction
            db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()

@app.get("/filter/")
async def filter_data(start: datetime, end: datetime):
    db = SessionLocal()
    
    # Query using Postgres timestamp range
    results = db.query(CleanedData).filter(
        between(
            CleanedData.timestamp,
            start.astimezone(timezone.utc),
            end.astimezone(timezone.utc)
        )
    ).all()

    return results
