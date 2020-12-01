import React, { useState } from 'react';
import { navigate } from '@reach/router';
import get from 'lodash/get';
import head from 'lodash/head';
import InputField from 'components/InputField';
import { Container, Title, Form, Button } from './style';

const Login = () => {
  const [formData, setFormData] = useState({});

  const hasValue = get(formData, 'account') && get(formData, 'password');
  const isDisable = !hasValue;

  const handleFormData = () => {
    const account = get(head(document.getElementsByName('account')), 'value');
    const password = get(head(document.getElementsByName('password')), 'value');

    setFormData({ account, password });
  };

  const handleSubmit = event => {
    if (isDisable) return;
    event.preventDefault();

    navigate('home');
  };

  return (
    <Container>
      <Title>Fake Instagram</Title>
      <Form onSubmit={handleSubmit} onChange={handleFormData}>
        <InputField name="account" label="手機號碼、用戶名稱或電子郵件地址" />
        <InputField name="password" label="密碼" type="password" />
        <Button isDisable={isDisable} type="submit">
          登入
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
