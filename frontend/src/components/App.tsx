import { DataGrid } from "@mui/x-data-grid";
import FileUpload from "./FileUpload";
import TimeSeriesChart from "./TimeSeriesChart";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../lib/util";

const App = () => {
  const { data, isLoading } = useQuery<any[]>({
    queryKey: ["GET_DATA"],
    queryFn: fetchData,
  });

  if (isLoading) return "Loading...";

  return (
    <div>
      <FileUpload onUpload={fetchData} />
      <TimeSeriesChart data={data || []} />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={[
            { field: "timestamp", headerName: "Timestamp", width: 200 },
            { field: "cleaned_values", headerName: "Value", width: 130 },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
