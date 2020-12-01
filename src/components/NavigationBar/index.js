import React from 'react';
import { AiOutlineCamera as CameraIcon } from 'react-icons/ai';
import { FiSend as SendIcon } from 'react-icons/fi';
import { Container, Title } from './style';

const NavigationBar = () => (
  <Container>
    <CameraIcon />
    <Title>Instagram</Title>
    <SendIcon />
  </Container>
);

export default NavigationBar;
