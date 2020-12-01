import styled from 'styled-components';

export const MobileView = styled.div`
  margin: auto;
  width: 100%;
  max-width: 520px;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

export const SafeArea = styled.div`
  height: ${({ height }) => height}px;
  overflow-x: hidden;
  overflow-y: auto;
`;
