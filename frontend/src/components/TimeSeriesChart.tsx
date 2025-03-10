import { useQuery } from "@tanstack/react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { fetchData } from "../lib/util";

const TimeSeriesChart = () => {
  const { data, isLoading } = useQuery<any[]>({
    queryKey: ["GET_DATA"],
    queryFn: fetchData,
  });

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
