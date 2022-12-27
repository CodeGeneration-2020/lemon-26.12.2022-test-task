import React from 'react';
import {
  ActionBtn,
  Container,
  ProfileImage,
  ResizeImage,
  Text,
} from './index.styled';
import { Box } from '../../../common/components/index.styled';
import {
  AvatarFirst,
  Cloud,
  AvatarSecond,
  ResizeLine,
  Line,
  Resize,
  Headphones,
  Share,
} from '../../../../assets';

const Controls = () => (
  <Container>
    <Box>
      <ActionBtn>
        <img src={Cloud} alt="Cloud" />
        <Text margin="0 0 0 7px"> 25%</Text>
      </ActionBtn>
      <ActionBtn>
        <Text margin="0 0 0 7px"> Filter</Text>
      </ActionBtn>
    </Box>
    <Box>
      <Box margin=" 0 16px 0 0">
        <Box margin=" 0 4px 0 0">
          <ProfileImage src={AvatarFirst} alt="avatar1" />
        </Box>
        <Box>
          <ProfileImage src={AvatarSecond} alt="avatar2" />
        </Box>
      </Box>

      <ActionBtn>
        <ResizeImage
          margin="0 6px 0 0 "
          isActive={true}
          src={ResizeLine}
          alt="ResizeLine"
        />
        <img src={Line} alt="Line" />
        <ResizeImage margin="0  0 0 12px" src={Resize} alt="Resize" />
      </ActionBtn>
      <ActionBtn>
        <img src={Headphones} alt="Headphones" />
      </ActionBtn>
      <ActionBtn isMR={true}>
        <img src={Share} alt="Share" />
        <Text margin="0 0 0 7px"> Share</Text>
      </ActionBtn>
    </Box>
  </Container>
);

export default Controls;
