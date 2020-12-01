import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 72px;

  & > div {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
`;
