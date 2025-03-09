import { FC } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../lib/util";

const FileUpload: FC<{ onUpload: () => void }> = ({ onUpload }) => {
  const { mutate: upload } = useMutation({
    mutationFn: uploadFile,
    onSuccess: onUpload,
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "text/csv": [".csv", ".xlsx"] },
    onDrop: (files) => {
      upload(files[0]);
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag & drop CSV/Excel file here</p>
    </div>
  );
};

export default FileUpload;
