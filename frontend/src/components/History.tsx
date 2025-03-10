import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../lib/util";
import classes from "./History.module.scss";

const History = () => {
  const { data, isLoading } = useQuery<any[]>({
    queryKey: ["GET_DATA"],
    queryFn: fetchData,
  });

  if (isLoading) return "Loading...";

  return (
    <div className={classes.history}>
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
