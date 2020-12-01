import styled, { css } from 'styled-components';

const LabelStyle = {
  hasValue: css`
    top: 0;
    margin-left: 0;
    transform: scale(0.8);
  `,
};

const InputStyle = {
  hasValue: css`
    top: 20%;
  `,
};

export const Container = styled.div`
  position: relative;
  padding: 18px 0;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 8px;
  color: #8e8e8e;
  font-size: 13px;
  transition: 0.15s ease;
  transform: translateY(-50%);
  transform-origin: left;
  z-index: 1;

  ${({ hasValue }) => hasValue && LabelStyle.hasValue}
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  padding: 0 8px;
  font-size: 12px;
  z-index: 2;

  ${({ hasValue }) => hasValue && InputStyle.hasValue}
`;
