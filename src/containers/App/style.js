import styled from 'styled-components';

export const MobileView = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 520px;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

export const SafeArea = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;
