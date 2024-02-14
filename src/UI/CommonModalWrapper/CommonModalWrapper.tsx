import { Modal, ModalProps } from "antd";

const CommonModalWrapper = ({ children, ...props }: ModalProps) => {
  return (
    <Modal {...props} centered>
      {children}
    </Modal>
  );
};

export default CommonModalWrapper;
