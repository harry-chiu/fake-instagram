import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  font-size: 0;
  background: #c0c0c0;
  transform: translateX(-50%) translateY(-50%);
`;

export const Text = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  word-break: keep-all;
`;
