import styled from 'styled-components';

import { COLORS, FONTS } from '../../../theme';

export const Container = styled.div<{ isDragging: boolean }>`
  width: 244px;
  border: 1px solid ${COLORS.secondary_gray};
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${({ isDragging }) => (isDragging ? COLORS.gray : '')};
  position: relative;
  z-index: 2;
  &:hover {
    cursor: grab;
  }
  &:after {
    content: '';
    position: absolute;
    width: ${({ isDragging }) => (isDragging ? 0 : '236px')};
    height: ${({ isDragging }) => (isDragging ? 0 : '100px')};
    border: 1px solid ${COLORS.secondary_gray};
    border-radius: 8px;
    bottom: -7px;
    right: 2px;
    z-index: -1;
  }
`;
export const CardLayout = styled.div<{ isDragging: boolean }>`
  visibility: ${({ isDragging }) => (isDragging ? 'hidden' : '')};
  background: ${COLORS.white};
  border-radius: 8px;
`;

export const Epic = styled.div`
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;

  letter-spacing: 0.6px;

  color: ${COLORS.epic};
`;

export const Title = styled.div`
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.2px;

  color: ${COLORS.dark_black};
`;

export const ImgDesc = styled.img`
  width: 212px;
  height: 88px;
  border-radius: 6px;
  margin: 15px 0 0;
`;

export const Description = styled.div`
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.2px;

  color: ${COLORS.epic};
`;

export const StyledType = styled.div<{
  type: 'Research' | 'UI Design' | 'Planning';
}>`
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  padding: 4px 8px;
  background: ${COLORS.light_purple};
  color: ${COLORS.blue};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ type }) => {
    switch (type) {
      case 'Research':
        return `
		    background-color : ${COLORS.light_pr_purple};
		    color: ${COLORS.light_primary_purple};`;

      case 'UI Design':
        return `
		    background-color : ${COLORS.light_pr_blue};
		    color: ${COLORS.blue};`;

      case 'Planning':
        return `
        background-color : ${COLORS.light_green};
        color: ${COLORS.green};`;
    }
  }}
`;

export const Count = styled.div<{ margin?: string; color?: string }>`
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  letter-spacing: 0.2px;

  color: ${({ color }) => (color ? color : COLORS.secondary_blue)};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const ImageWrapper = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${COLORS.white};
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${COLORS.primary_blue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageCont = styled.div`
  font-family: ${FONTS.FAMILIES.walsheim};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  color: ${COLORS.dark_pr_blue};
`;
