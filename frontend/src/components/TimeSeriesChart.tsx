import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useTemperatureHistoryQuery } from "../lib/queries";

const TimeSeriesChart = () => {
  const { data, isLoading } = useTemperatureHistoryQuery();

  if (isLoading) return "Loading...";

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="cleaned_values" stroke="#8884d8" />
    </LineChart>
  );
};

export default TimeSeriesChart;
