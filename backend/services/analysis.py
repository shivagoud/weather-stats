
def calculate_stats(df):
  return {
    'mean': float(df['temperature'].mean()),
    'median': float(df['temperature'].median()),
    'min': float(df['temperature'].median()),
    'max': float(df['temperature'].median())
  }