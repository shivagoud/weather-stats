from pydantic import BaseModel
from datetime import datetime

class TimeSeriesData(BaseModel):
    timestamp: datetime
    value: float

class AnalysisRequest(BaseModel):
    start_date: datetime
    end_date: datetime