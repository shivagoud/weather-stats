import { useQuery } from "@tanstack/react-query";
import { TemperatureSample, TemperatureStats } from "./types";
import { fetchData, fetchFilteredStats } from "./api";

export const useTemperatureHistoryQuery = () => {
  return useQuery<TemperatureSample[]>({
    queryKey: ["GET_DATA"],
    queryFn: fetchData,
  });
};

export const useFilteredStatsQuery = (from: Date, to: Date) => {
  return useQuery<TemperatureStats>({
    queryKey: ["GET_STATS", from, to],
    queryFn: () => fetchFilteredStats(from, to),
  });
};
