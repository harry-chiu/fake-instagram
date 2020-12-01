import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Input } from './style';

const InputField = ({ label, ...props }) => {
  const [value, setValue] = useState('');
  const hasValue = Boolean(value);

  const handleValue = event => setValue(event.target.value);

  return (
    <Container>
      <Label hasValue={hasValue}>{label}</Label>
      <Input
        {...props}
        value={value}
        hasValue={hasValue}
        onChange={handleValue}
      />
    </Container>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
};

export default InputField;
