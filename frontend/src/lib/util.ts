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
