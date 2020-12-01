import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 44px;
  display: flex;
  max-width: 100vw;
  min-height: 74px;
  padding: 8px 0;
  border-bottom: 1px solid #202020;
  background: #000000;
  overflow-x: auto;
  z-index: 99;

  & > div {
    margin-left: 12px;
  }
`;
