import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 64px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
  background: #303030;
  text-align: center;
  border-radius: 16px;
  font-size: 12px;
  transform: translateX(-50%);
  z-index: 999;

  animation-name: ${({ isShow }) => (isShow ? fadeIn : fadeOut)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;
