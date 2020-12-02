import React from 'react';
import { render, createPortal } from 'react-dom';
import Alert from 'components/Alert';

const showAlert = () => {
  const Portal = createPortal(<Alert>目前為離線模式</Alert>, document.body);

  render(Portal, document.createElement('div'));
};

export default showAlert;
