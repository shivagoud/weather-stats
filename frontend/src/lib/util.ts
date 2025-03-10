import { TemperatureSample } from "./types";

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return fetch("http://localhost:8000/upload/", {
    method: "post",
    body: formData,
  });
};

export const fetchData = () =>
  fetch("http://localhost:8000/data/").then((res) => res.json());

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
