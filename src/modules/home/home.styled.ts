import styled from 'styled-components';
import { Layout } from 'antd';
import { COLORS } from '../theme';

export const Container = styled(Layout)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const StyledLayout = styled(Layout)`
  background: ${COLORS.white};
`;
