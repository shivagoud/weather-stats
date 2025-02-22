from sqlalchemy import Column, Integer, DateTime, Float, JSON
from database import Base

class RawData(Base):
    __tablename__ = "raw_data"
    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime(timezone=True))  # Postgres timestamp with timezone
    values = Column(JSON)  # Store multiple metrics

class CleanedData(Base):
    __tablename__ = "cleaned_data"
    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime(timezone=True))
    cleaned_values = Column(JSON)

class AnalysisResults(Base):
    __tablename__ = "analysis_results"
    id = Column(Integer, primary_key=True, index=True)
    period_start = Column(DateTime(timezone=True))
    period_end = Column(DateTime(timezone=True))
    metrics = Column(JSON)  # Store multiple analysis results