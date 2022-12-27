import styled from 'styled-components';

import { Box } from '../../../common/components/index.styled';
import { COLORS, FONTS } from '../../../theme';

export const StyledColumnHeader = styled(Box)<{ color: string; mb?: string }>`
  width: 244px;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ color }) => color};
  margin-bottom: ${({ mb }) => (mb ?? 0)};
`;

export const Title = styled.div`
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.2px;

  color: ${COLORS.black};
`;

export const Count = styled(Box)`
  color: ${COLORS.black};
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  width: 28px;
  height: 20px;
  background: ${COLORS.gray};

  border: 1px solid ${COLORS.secondary_gray};
  border-radius: 8px;
`;

export const AddNewCard = styled.button`
  background: ${COLORS.white};

  border: 1px solid ${COLORS.secondary_gray};
  border-radius: 8px;

  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.2px;

  color: ${COLORS.primary};
  padding: 10px 0;

  cursor: pointer;
  outline: none;
  transition: 0.5s all;

  :hover {
    transform: translateY(3px);
  }
`;
