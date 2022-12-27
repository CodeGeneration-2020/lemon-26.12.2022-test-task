import React from 'react';
import { Arrow, HeaderBtnIcon } from '../../../../assets';

import {
  Block,
  HeaderButton,
  ProjectDesc,
  ProjectTitle,
  SearchIcon,
  StyledArrow,
  StyledHeader,
  StyledSearch,
} from './index.styled';

interface IProps {
  project: string;
}

const HeaderComponent = ({ project }: IProps) => (
  <StyledHeader>
    <Block>
      Projects
      <StyledArrow src={Arrow} alt="arrow" />
      <ProjectTitle> {project}</ProjectTitle>
      <ProjectDesc>FLYTE</ProjectDesc>
    </Block>
    <Block>
      <StyledSearch prefix={<SearchIcon />} placeholder="Search" />
      <HeaderButton>
        <img src={HeaderBtnIcon} alt="arrow" />
      </HeaderButton>
    </Block>
  </StyledHeader>
);

export default HeaderComponent;
