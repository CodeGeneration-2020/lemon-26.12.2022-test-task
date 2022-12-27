import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from '../common/components/header';
import Controls from './components/controls';
import DashBoard from './components/dashBoard';
import Sider from '../common/components/sider';
import Line from '../common/components/line';

import { Container, StyledLayout } from './home.styled';

const { Content } = Layout;

const HomePageContainer = () => (
  <Container>
    <Sider />
    <StyledLayout>
      <HeaderComponent project="Cloud Platform" />
      <Line />
      <Controls />
      <Line />
      <Content>
        <DashBoard />
      </Content>
    </StyledLayout>
  </Container>
);

export default HomePageContainer;
