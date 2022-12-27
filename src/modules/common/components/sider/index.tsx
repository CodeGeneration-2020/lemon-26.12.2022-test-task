import React from 'react';
import Line from '../line';
import {Logo} from '../../../../assets';
import PojectList from './components/projectList';

import {StyledSider} from './index.styled';
import {Box} from '../index.styled';

const Sider = () => {
  return (
    <StyledSider>
      <Box justify="center" padding="12px" changeDirection={true}>
        <img src={Logo} alt="logo" />
      </Box>
      <Box align="center" justify="center" margin="0 0 11px 0">
        <Line width="32px" />
      </Box>

      <PojectList />
    </StyledSider>
  );
};

export default Sider;
