import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: #020202;

  & > svg {
    font-size: 24px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;
