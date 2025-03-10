import { useDropzone } from "react-dropzone";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadFile } from "../lib/util";
import classes from "./FileUpload.module.scss";

const FileUpload = () => {
  const queryClient = useQueryClient();
  const { mutate: upload } = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => queryClient.invalidateQueries(),
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "text/csv": [".csv", ".xlsx"] },
    onDrop: (files) => {
      console.log(files);
      upload(files[0]);
    },
  });

  return (
    <div {...getRootProps()} className={classes.root}>
      <input {...getInputProps()} />
      <p>Drag & drop CSV/Excel file here</p>
    </div>
  );
};

export default FileUpload;
