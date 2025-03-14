import pandas as pd
from datetime import datetime, timezone

def clean_data(df: pd.DataFrame) -> pd.DataFrame:
    # Convert timestamps to UTC-aware datetime objects
    df['timestamp'] = pd.to_datetime(df['timestamp']).dt.tz_convert(timezone.utc)
    df['date'] = df['timestamp'].dt.date

    # Handle missing values using forward fill
    df.ffill(inplace=True)

    return df