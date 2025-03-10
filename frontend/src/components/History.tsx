import { DataGrid } from "@mui/x-data-grid";
import { downloadData } from "../lib/util";
import classes from "./History.module.scss";
import { Button } from "@mui/material";
import { useTemperatureHistoryQuery } from "../lib/queries";
import { format } from "date-fns/fp";

const dateFormatter = format("dd-MMM-yyyy hh:mma");

const History = () => {
  const { data, isLoading } = useTemperatureHistoryQuery();

  if (isLoading) return "Loading...";

  return (
    <div className={classes.root}>
      <div className={classes.actions}>
        {data && (
          <Button variant="outlined" onClick={() => downloadData(data)}>
            Download
          </Button>
        )}
      </div>
      <DataGrid
        rows={data}
        columns={[
          { field: "location", headerName: "Location", width: 130 },
          { field: "temperature", headerName: "Value", width: 130 },
          {
            field: "timestamp",
            headerName: "Timestamp",
            width: 200,
            valueFormatter: dateFormatter,
          },
        ]}
      />
    </div>
  );
};

export default History;
