import type { TemperatureSample } from "./types";

export const SAMPLE_DATA: TemperatureSample[] = [
  {
    location: "Hyderabad",
    temperature: 32.3,
    timestamp: new Date(),
  },
];

export const HEADER_LINKS: Record<string, string> = {
  "/": "Dashboard",
  "/history": "Report",
  "/upload": "Upload",
};
