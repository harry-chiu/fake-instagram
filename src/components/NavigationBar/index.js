import React from 'react';
import { FiSend as SendIcon } from 'react-icons/fi';
import { AiOutlineCamera as CameraIcon } from 'react-icons/ai';
import { Container, Title } from './style';

const NavigationBar = () => (
  <Container>
    <CameraIcon />
    <Title>Instagram</Title>
    <SendIcon />
  </Container>
);

export default NavigationBar;
