import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

import Line from '../line';
import { TStatusToDO, TTypeToDO } from '../../../home/types';

import {
  Container,
  Count,
  Description,
  Epic,
  ImageCont,
  ImageWrapper,
  StyledType,
  Title,
  CardLayout,
  ImgDesc,
} from './index.styled';
import { Box } from '../index.styled';

import { Calendar, Done, Link, Message, TickCircle } from '../../../../assets';
import { handleDrop } from '../../utils/drop.utils';
import { COLORS } from '../../../theme';

interface IProps {
  id: number;
  title: string;
  epic: string;
  src?: string;
  desc?: string;
  type: TTypeToDO;
  images: string[];
  messageCount?: number;
  linkCount?: number;
  doneCount?: number | string;
  date?: string;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  status: TStatusToDO;
}

const Card = ({
  id,
  title,
  epic,
  src,
  desc,
  type,
  messageCount,
  linkCount,
  doneCount,
  date,
  images,
  index,
  status,
  moveItem,
}: IProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const drop = handleDrop({ index, ref, moveItem });

  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: 'ITEM',
    item: {
      id,
      title,
      epic,
      src,
      desc,
      type,
      messageCount,
      linkCount,
      doneCount,
      date,
      images,
      status,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <Container isDragging={isDragging} ref={ref}>
      <CardLayout isDragging={isDragging}>
        <Box padding="7px 16px" changeDirection={true}>
          <Epic>{epic}</Epic>
          <Title>{title}</Title>
          {src && <ImgDesc src={src} alt="description" />}
          {desc && <Description>{desc}</Description>}
          <Box justify="space-between" margin="15px 0">
            <StyledType type={type}>{type}</StyledType>
            <Box>
              {images.slice(0, 3).map((image, index) => (
                <ImageWrapper key={image + index}>
                  <img src={image} alt="image" />
                </ImageWrapper>
              ))}

              {images.length > 3 && (
                <ImageWrapper>
                  <ImageCont>{images.length - 3}+</ImageCont>
                </ImageWrapper>
              )}
            </Box>
          </Box>
        </Box>
        <Line />
        <Box padding="0 16px 12px" changeDirection={true}>
          <Box justify="space-between" margin="12px 0 0 0">
            <Box>
              {!!messageCount && (
                <Box margin="0 8px 0 0" align="center">
                  <img src={Message} alt="message" />
                  <Count margin="0 0 0 5.5px">{messageCount}</Count>
                </Box>
              )}

              {!!linkCount && (
                <Box margin="0 8px 0 0" align="center">
                  <img src={Link} alt="link" />
                  <Count margin="0 0 0 5.5px">{linkCount}</Count>
                </Box>
              )}

              {!!doneCount && (
                <Box margin="0 8px 0 0" align="center">
                  <img src={Done} alt="Done" />
                  <Count margin="0 0 0 5.5px">{doneCount}</Count>
                </Box>
              )}
            </Box>
            <Box>
              {!!date && status !== 'COMPLETED' && (
                <Box margin="0 8px 0 0" align="center">
                  <img src={Calendar} alt="Calendar" />
                  <Count margin="0 0 0 5.5px">{date}</Count>
                </Box>
              )}
              {status === 'COMPLETED' && (
                <Box margin="0 8px 0 0" align="center">
                  <img src={TickCircle} alt="TickCircle" />
                  <Count color={COLORS.green} margin="0 0 0 5.5px">
                    Done
                  </Count>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </CardLayout>
    </Container>
  );
};

export default Card;
