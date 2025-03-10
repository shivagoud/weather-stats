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

export const fetchFilteredStats = (from: Date, to: Date) =>
  fetch(
    `http://localhost:8000/stats/?start=${from.getTime()}&end=${to.getTime()}`
  ).then((res) => res.json());
