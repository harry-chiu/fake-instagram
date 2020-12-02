import React from 'react';
import PropTypes from 'prop-types';
import { render, createPortal } from 'react-dom';
import Modal from 'components/Modal';

const showModal = ({ onConfirm }) => {
  const Portal = createPortal(<Modal onConfirm={onConfirm} />, document.body);

  render(Portal, document.createElement('div'));
};

showModal.propTypes = {
  showModal: PropTypes.func,
};

showModal.defaultProps = {
  showModal: () => {},
};

export default showModal;
