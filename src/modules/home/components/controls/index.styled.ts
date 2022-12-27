import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const SearchIcon = styled.div`
  color: ${COLORS.primary_gray};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 24px 11px;
  background: ${COLORS.white};
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
`;

export const ProfileBlock = styled.div`
  margin-right: 12px;
  display: flex;
`;

export const ActionBtn = styled.button<{ isMR?: boolean }>`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.light_gray};
  box-shadow: 0 3px 0 ${COLORS.light_gray};
  border-radius: 8px;
  margin-right: ${({ isMR }) => (!isMR ? '5px' : '0')};
  cursor: pointer;
  outline: none;

  :active {
    transform: translateY(1px);
    box-shadow: 0 0 0 ${COLORS.light_gray};
  }
`;

export const ResizeImage = styled.img<{
  margin?: string;
  isActive?: boolean;
}>`
  margin: ${({ margin }) => (margin ?? 0)};
  background: ${({ isActive }) => (isActive ? COLORS.light_gray : 'none')};
  padding: ${({ isActive }) => (isActive ? '6px' : '0')};
  border-radius: ${({ isActive }) => (isActive ? '5px' : 'none')};
`;

export const Text = styled.span<{ margin?: string }>`
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  letter-spacing: 0.2px;

  color: ${COLORS.dark_gray};

  margin: ${({ margin }) => (margin ?? 0)};
`;
