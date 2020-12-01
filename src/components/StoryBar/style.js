import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  padding: 8px 0;
  overflow-x: auto;
  border-bottom: 1px solid #202020;

  & > div {
    margin-left: 12px;
  }
`;
