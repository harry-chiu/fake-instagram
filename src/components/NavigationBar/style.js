import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  min-height: 44px;
  background: #020202;
  z-index: 99;

  & > svg {
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;
