from sqlalchemy import Column, Integer, DateTime, Float, String
from database import Base

class RawData(Base):
    __tablename__ = "raw_data"
    id = Column(Integer, primary_key=True, index=True)
    location = Column(String)
    temperature = Column(Float)
    timestamp = Column(DateTime(timezone=True))  # Postgres timestamp with timezone

class CleanedData(Base):
    __tablename__ = "cleaned_data"
    id = Column(Integer, primary_key=True, index=True)
    location = Column(String)
    temperature = Column(Float)
    timestamp = Column(DateTime(timezone=True))  # Postgres timestamp with timezone

class AnalysisResults(Base):
    __tablename__ = "analysis_results"
    id = Column(Integer, primary_key=True, index=True)
    period_start = Column(DateTime(timezone=True))
    period_end = Column(DateTime(timezone=True))
    location = Column(String)
    mean_temperature = Column(Float)
    median_temperature = Column(Float)
    min_temperature = Column(Float)
    max_temperature = Column(Float)
