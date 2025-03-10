import { useQuery } from "@tanstack/react-query";
import { TemperatureSample } from "./types";
import { fetchData, fetchFilteredStats } from "./api";

export const useTemperatureHistoryQuery = () => {
  return useQuery<TemperatureSample[]>({
    queryKey: ["GET_DATA"],
    queryFn: fetchData,
  });
};

export const useFilteredStatsQuery = (from: Date, to: Date) => {
  return useQuery<TemperatureSample[]>({
    queryKey: ["GET_STATS", from, to],
    queryFn: () => fetchFilteredStats(from, to),
  });
};
