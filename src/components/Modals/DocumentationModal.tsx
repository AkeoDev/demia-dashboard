import { useState } from "react";
import classes from "./DocumentationModal.module.scss";
import { useDropzone } from "react-dropzone";
import { ReactSVG } from "react-svg";
import { uploadIcon } from "../../assets";

interface ModalProps {
  onClose: () => void;
}

export const DocumentationModal: React.FC<ModalProps> = ({ onClose }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setUploadedFiles(acceptedFiles);
      console.log(acceptedFiles);
      // Call your backend API endpoint to upload files
    },
  });

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <div className={classes.modalContent}>
          <div className={classes.modalInnerContent}>
            <div {...getRootProps({ className: `${classes.dropzone}` })}>
              <ReactSVG src={uploadIcon}></ReactSVG>
              <input {...getInputProps()} />
              <p>Drag and Drop Files Here, or Click to Select Files</p>
              <ul>
                {uploadedFiles.map((file: File) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            </div>
            <button className={classes.modalClose} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
