import React, { ReactElement } from 'react';

import { ColumnWrapper } from './index.styled';

interface IProps {
  children: ReactElement[] | ReactElement;
  isOver?: boolean;
  isDragging?: boolean;
  isEmpty?: boolean;
}

const Column = ({ children, isOver, isEmpty }: IProps) => {
  return (
    <ColumnWrapper isOver={isOver} isEmpty={isEmpty}>
      {children}
    </ColumnWrapper>
  );
};

export default Column;
