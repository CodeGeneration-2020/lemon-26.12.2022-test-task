import React from 'react';
import { useDrop } from 'react-dnd';

import { IItemsCards, TStatusToDO } from '../../../../types';

interface IProps {
  onDrop: (item: IItemsCards, monitor: unknown, status: TStatusToDO) => void;
  children: React.ReactElement;
  status: TStatusToDO;
}

const DropWrapper = ({ onDrop, children, status }: IProps) => {
  const [{ isOver, isDragging }, drop] = useDrop({
    accept: 'ITEM',
    drop: (item: IItemsCards, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isDragging: monitor.didDrop(),
    }),
  });

  return (
    <div ref={drop}>{React.cloneElement(children, { isOver, isDragging })}</div>
  );
};

export default DropWrapper;
