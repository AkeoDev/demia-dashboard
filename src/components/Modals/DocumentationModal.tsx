import { Button } from "../Buttons/Button";
import classes from "./DocumentationModal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <div className={classes.modalContent}>
          <div className={classes.modalInnerContent}>
            <h2>Modal Content</h2>
            <p>This is some modal content!</p>
            <button className={classes.modalClose} onClick={onClose}>
              Cancel
            </button>
            <Button>Browse Files</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
