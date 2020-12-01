import styled from 'styled-components';

export const MobileView = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 520px;
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

export const SafeArea = styled.div`
  padding-top: 130px;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;
