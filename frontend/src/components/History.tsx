import { DataGrid } from "@mui/x-data-grid";
import { downloadData } from "../lib/util";
import classes from "./History.module.scss";
import { Button } from "@mui/material";
import { useTemperatureHistoryQuery } from "../lib/queries";

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
          { field: "timestamp", headerName: "Timestamp", width: 200 },
          { field: "cleaned_values", headerName: "Value", width: 130 },
        ]}
      />
    </div>
  );
};

export default History;
