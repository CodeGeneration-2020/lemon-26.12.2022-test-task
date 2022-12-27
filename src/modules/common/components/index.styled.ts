import styled from 'styled-components';

export const Box = styled.div<{
  margin?: string;
  padding?: string;
  justify?: string;
  align?: string;
  changeDirection?: boolean;
}>`
  display: flex;
  margin: ${({ margin }) => (margin ?? 0)};
  padding: ${({ padding }) => (padding ?? 0)};
  justify-content: ${({ justify }) => (justify ?? 'normal')};
  align-items: ${({ align }) => (align ?? 'normal')};
  flex-direction: ${({ changeDirection }) =>
    !changeDirection ? 'row' : 'column'};
`;
