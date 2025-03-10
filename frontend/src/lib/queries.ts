import { useQuery } from "@tanstack/react-query";
import { TemperatureSample } from "./types";
import { fetchData } from "./util";

export const useTemperatureHistoryQuery = () => {
  return useQuery<TemperatureSample[]>({
    queryKey: ["GET_DATA"],
    queryFn: fetchData,
  });
};
