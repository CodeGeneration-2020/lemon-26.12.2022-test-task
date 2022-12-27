import React from 'react';

import DropWrapper from '../../index';
import Card from '../../../../../../../common/components/card';
import { IItemsCards, TStatusToDO } from '../../../../../../types';
import Column from '../../../column';

interface IProps {
  onDrop: (item: IItemsCards, monitor: unknown, status: TStatusToDO) => void;
  title: TStatusToDO;
  items: IItemsCards[];
  isEmpty: boolean;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}
const DropWrapperList = ({
  items,
  title,
  onDrop,
  isEmpty,
  moveItem,
}: IProps) => {
  return (
    <DropWrapper onDrop={onDrop} status={title}>
      <Column isEmpty={isEmpty}>
        {items
          .filter((item) => item.status === title)
          .map((i, idx) => {
            return (
              <Card
                {...i}
                key={i.id}
                index={idx}
                moveItem={moveItem}
                status={title}
              />
            );
          })}
      </Column>
    </DropWrapper>
  );
};

export default DropWrapperList;
