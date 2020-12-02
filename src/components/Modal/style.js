import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  0% { transform: scale(0)}
  90% { transform: scale(1.1)}
  100% { transform: scale(1)}
`;

const zoomOut = keyframes`
  0% { transform: scale(1)}
  100% { transform: scale(0)}
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-width: 240px;
  color: #000000;
  background: #ffffff;
  border-radius: 24px;

  animation-name: ${({ isShow }) => (isShow ? zoomIn : zoomOut)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;

  & > svg {
    font-size: 72px;
  }
`;

export const Title = styled.h1`
  margin: 24px 0 0;
  font-size: 18px;
`;

export const Description = styled.p`
  margin: 16px 0 0;
  font-size: 13px;
  text-align: center;
  white-space: pre-line;
`;

export const Button = styled.button`
  padding: 8px 16px;
  min-width: 120px;
  border: none;
  border-radius: 16px;

  &:nth-of-type(1) {
    margin-top: 32px;
    color: #ffffff;
    background: #4fadff;
  }

  &:nth-of-type(2) {
    margin-top: 8px;
    color: #606060;
    background: #ffffff;
    border: 1px solid #d9d9d9;
  }
`;
