import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const StyledLine = styled.div<{ width?: string }>`
  height: 1px;
  background: ${COLORS.light_secondary_gray};
  width: ${({ width }) => (width ?? '100%')};
`;
