import React from 'react';
import { render, createPortal } from 'react-dom';
import Message from 'components/Message';

const showMessage = message => {
  const Portal = createPortal(<Message>{message}</Message>, document.body);

  render(Portal, document.createElement('div'));
};

export default showMessage;
