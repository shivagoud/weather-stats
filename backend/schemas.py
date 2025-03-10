from pydantic import BaseModel
from datetime import datetime

class AnalysisRequest(BaseModel):
    start_date: datetime
    end_date: datetime