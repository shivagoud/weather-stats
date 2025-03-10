export type TemperatureSample = {
  location: string;
  temperature: number;
  timestamp: Date;
};

export type TemperatureStats = {
  location: string;
  mean_temperature: number;
  median_temperature: number;
  min_temperature: number;
  max_temperature: number;
  period_start: Date;
  period_end: Date;
}[];
