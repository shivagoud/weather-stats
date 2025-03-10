import { useDropzone } from "react-dropzone";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { downloadData, generateRandomData, uploadFile } from "../lib/util";
import classes from "./FileUpload.module.scss";
import { Button } from "@mui/material";
import { SAMPLE_DATA } from "../lib/constants";

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
    <>
      <div className={classes.root}>
        <div className={classes.actions}>
          <Button
            size="small"
            variant="text"
            onClick={() => downloadData(SAMPLE_DATA)}
          >
            Download Sample
          </Button>
          <Button
            size="small"
            variant="text"
            onClick={() => downloadData(generateRandomData())}
          >
            Generate Random
          </Button>
        </div>
        <div {...getRootProps()} className={classes.dnd}>
          <input {...getInputProps()} />
          <p>Drag & drop CSV/Excel file here</p>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
