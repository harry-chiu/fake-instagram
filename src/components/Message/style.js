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
  top: 50%;
  left: 50%;
  background: transparent;
  border-radius: 24px;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;

  animation-name: ${({ isShow }) => (isShow ? fadeIn : fadeOut)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  min-height: 120px;
  padding: 24px;
  z-index: 2;

  & > svg {
    font-size: 48px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.8;
  z-index: 1;
`;

export const Text = styled.span`
  margin-top: 12px;
  font-size: 12px;
  text-align: center;
  white-space: pre-line;
`;
