import pandas as pd
from datetime import datetime, timezone

def clean_data(df: pd.DataFrame) -> pd.DataFrame:
    # Convert timestamps to UTC-aware datetime objects
    df['timestamp'] = pd.to_datetime(df['timestamp']).dt.tz_localize(timezone.utc)

    # Handle missing values using forward fill
    df.ffill(inplace=True)
    
    # Normalize numerical columns
    numeric_cols = df.select_dtypes(include='number').columns
    df[numeric_cols] = (df[numeric_cols] - df[numeric_cols].mean()) / df[numeric_cols].std()
    
    return df