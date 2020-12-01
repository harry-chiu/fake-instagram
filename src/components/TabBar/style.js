import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
  padding-bottom: env(safe-area-inset-bottom);
  background: #020202;
  z-index: 99;
`;

export const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;

  & > svg {
    font-size: 28px;
  }
`;
