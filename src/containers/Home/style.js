import styled from 'styled-components';

export const Container = styled.div`
  & > div {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
`;
