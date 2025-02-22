from sklearn.cluster import KMeans
from prophet import Prophet
import pandas as pd

def calculate_stats(df):
    return {
        'mean': df['cleaned_value'].mean(),
        'median': df['cleaned_value'].median()
    }

def forecast_values(df):
    df = df.rename(columns={'timestamp': 'ds', 'cleaned_value': 'y'})
    model = Prophet()
    model.fit(df)
    future = model.make_future_dataframe(periods=30)
    forecast = model.predict(future)
    return forecast[['ds', 'yhat']].tail(30)