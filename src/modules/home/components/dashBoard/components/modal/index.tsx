import React from 'react';
import { Modal as StyledModal, Button } from 'antd';
import { Box } from '../../../../../common/components/index.styled';
import CreateCardForm from '../createCardForm';
import { IItemsCards, TStatusToDO } from '../../../../types';

interface IProps {
  isOpen: boolean;
  status: TStatusToDO;
  setItems: React.Dispatch<React.SetStateAction<IItemsCards[]>>;
  handleCancel: () => void;
}

const Modal = ({ status, isOpen, setItems, handleCancel }: IProps) => (
  <StyledModal
    footer={[
      <Button key="back" onClick={handleCancel}>
        Cancel
      </Button>,
    ]}
    title="Create new Card"
    open={isOpen}
    onCancel={handleCancel}>
    <Box changeDirection={true}>
      <CreateCardForm
        status={status}
        setItems={setItems}
        handleCancel={handleCancel}
      />
    </Box>
  </StyledModal>
);

export default Modal;
