import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
  background: #020202;
`;

export const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;

  & > svg {
    font-size: 20px;
  }
`;
