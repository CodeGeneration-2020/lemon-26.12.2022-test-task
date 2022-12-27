import styled from 'styled-components';
import { COLORS } from '../../../../../theme';

export const ColumnWrapper = styled.div<{
  isOver?: boolean;
  isEmpty?: boolean;
}>`
  background: ${({ isOver }) => (isOver ? COLORS.gray : '')};
  min-height: ${({ isEmpty }) => (isEmpty ? '30px' : '150px')};
  max-height: calc(100vh - 262px);
  overflow-y: auto;
`;
