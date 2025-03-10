
def calculate_stats(df):
  return {
    'mean': float(df['temperature'].mean()),
    'median': float(df['temperature'].median()),
    'min': float(df['temperature'].min()),
    'max': float(df['temperature'].max())
  }