import React, { useState } from 'react';
import { AddBlue } from '../../../../../../assets';
import { PROJECTS } from '../../constants';

import { Box } from '../../../index.styled';
import { StyledLogoProject } from '../../index.styled';

const PojectList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box changeDirection={true} align="center" justify="center">
      {PROJECTS.map((el, index) => {
        const handleClick = () => setActiveIndex(index);
        return (
          <StyledLogoProject
            key={index}
            isActive={index === activeIndex}
            onClick={handleClick}
            align="center"
            justify="center">
            <img src={el} alt={el} />
          </StyledLogoProject>
        );
      })}
      <StyledLogoProject align="center" justify="center">
        <img src={AddBlue} alt="logo" />
      </StyledLogoProject>
    </Box>
  );
};

export default PojectList;
