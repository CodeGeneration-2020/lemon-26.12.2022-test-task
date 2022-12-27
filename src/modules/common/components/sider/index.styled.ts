import { Layout } from 'antd';
const { Sider } = Layout;
import styled from 'styled-components';

import { Box } from '../index.styled';
import { COLORS } from '../../../theme';

export const StyledSider = styled(Sider)`
  background: ${COLORS.white}!important;
  max-width: 56px !important;
  min-width: 10px !important;

  border-right: 1px solid ${COLORS.secondary_gray};
`;

export const StyledLogoProject = styled(Box)<{ isActive?: Boolean }>`
  margin-bottom: 16px;
  background: ${({ isActive }) =>
    isActive ? COLORS.gray_rgba : COLORS.light_secondary_gray};
  border-radius: 8px;
  width: 32px;
  height: 32px;
  border: ${({ isActive }) =>
    isActive ? `1px solid ${COLORS.purple}` : 'none'};
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 23.02px;
    left: -13px;
    background: ${({ isActive }) => (isActive ? COLORS.purple : 'none')};
    border-radius: 0 8px 8px 0;
  }
`;
