import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
} from "recharts";
import { useFilteredStatsQuery } from "../lib/queries";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import classes from "./TimeSeriesChart.module.scss";
import { useState } from "react";
import { addMonths } from "date-fns";
import { format } from "date-fns/fp";

const dateFormatter = format("dd-MMM-yyyy");

const TimeSeriesChart = () => {
  const [from, setFrom] = useState(addMonths(new Date(), -3));
  const [to, setTo] = useState(new Date());
  const { data, isLoading } = useFilteredStatsQuery(from, to);

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="From"
            value={from}
            onChange={(date) => date && setFrom(date)}
          />
          <DatePicker
            label="To"
            value={to}
            onChange={(date) => date && setTo(date)}
          />
        </LocalizationProvider>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ComposedChart
          width={1000}
          height={400}
          data={data?.map((d) => ({
            ...d,
            tempRange: [d.min_temperature, d.max_temperature],
          }))}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period_start" tickFormatter={dateFormatter} />
          <YAxis />
          <Tooltip
            formatter={(value, label) => {
              switch (label) {
                case "Min & Max":
                  return `${Number(value[0]).toFixed(2)} to ${Number(
                    value[1]
                  ).toFixed(2)}`;
                default:
                  return Number(value).toFixed(2);
              }
            }}
            labelFormatter={dateFormatter}
          />
          <Line
            type="monotone"
            name="Temperature"
            dataKey="median_temperature"
            // stroke="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="tempRange"
            name="Min & Max"
            fill="#8884d833"
            stroke="#8884d8"
          />
        </ComposedChart>
      )}
    </div>
  );
};

export default TimeSeriesChart;
