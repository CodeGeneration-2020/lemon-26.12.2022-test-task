import React from 'react';

import { StyledLine } from './index.styled';

interface IProps {
  width?: string;
}

const Line = ({ width }: IProps) => <StyledLine width={width} />;

export default Line;
