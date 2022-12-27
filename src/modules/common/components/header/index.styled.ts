import styled from 'styled-components';
import { Input } from 'antd';
import { FiSearch } from 'react-icons/fi';

import { COLORS, FONTS } from '../../../theme';

export const Block = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHeader = styled.header`
  background: ${COLORS.white};
  padding: 17px 24px;
  display: flex;
  font-family: ${FONTS.FAMILIES.walsheim};
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${COLORS.light_black};
  justify-content: space-between;
`;

export const StyledArrow = styled.img`
  margin: 0 4.6px;
`;

export const ProjectTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: ${COLORS.dark_gray};
  font-family: ${FONTS.FAMILIES.walsheim};
`;

export const ProjectDesc = styled.div`
  background: ${COLORS.light_primary_gray};
  border-radius: 5px;
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  padding: 0 6px;
  letter-spacing: 0.2px;
  margin-left: 6px;

  color: ${COLORS.dark_gray};
`;

export const HeaderButton = styled.div`
  min-width: 32px;
  min-height: 32px;

  background: ${COLORS.white};
  border: 1px solid ${COLORS.light_gray};
  border-radius: 8px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 16px;
    height: 14px;
  }
`;

export const StyledSearch = styled(Input)`
  background: ${COLORS.light_main_gray} !important;
  border-radius: 8px;
  width: 175px;

  input {
    background: ${COLORS.light_main_gray};
  }

  input::placeholder {
    font-family: ${FONTS.FAMILIES.walsheim};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;

    letter-spacing: 0.2px;

    color: ${COLORS.dark_secondary_gray};
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: ${COLORS.primary_gray};
`;
