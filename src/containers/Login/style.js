import styled from 'styled-components';
import ButtonStyle from 'styles/ButtonStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 270px;
  margin-top: 32px;

  & > div {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }

  & > button {
    margin-top: 16px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 6px 0;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  background: #2395f6;

  ${({ isDisable }) => isDisable && ButtonStyle.disable}
`;
