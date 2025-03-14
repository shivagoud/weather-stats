import { TemperatureSample } from "./types";
import { addMinutes } from "date-fns/fp";

export const downloadData = (data: TemperatureSample[]) => {
  if (data.length === 0) throw new Error("Failed to download empty data");

  downloadCSV(jsonToCsvString(data));
};

const jsonToCsvString = (items: any[]) => {
  const header = Object.keys(items[0]);
  const headerString = header.join(",");

  // handle null or undefined values here
  const rowItems = items.map((row) =>
    header
      .map((fieldName) =>
        JSON.stringify(row[fieldName], (_key, value) => value ?? "")
      )
      .join(",")
  );
  // join header and body, and break into separate lines
  const csv = [headerString, ...rowItems].join("\r\n");
  return csv;
};

const downloadCSV = (csvStr: string) => {
  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csvStr);
  hiddenElement.target = "_blank";
  hiddenElement.download = "output.csv";
  hiddenElement.click();
};

export const generateRandomData = () => {
  const data: TemperatureSample[] = [];

  const getPrev = addMinutes(-30);

  let timestamp = new Date();
  for (let i = 0; i < 500; i++) {
    data.push({
      location: "Hyderabad",
      temperature: 5 + Math.random() * 25,
      timestamp,
    });
    timestamp = getPrev(timestamp);
  }

  return data;
};
