import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSmile as SmileIcon } from 'react-icons/ai';
import { Container, Wrapper, Title, Description, Button } from './style';

const Modal = ({ onConfirm }) => {
  const containerRef = useRef(null);
  const [isShow, setIsShow] = useState(true);

  const closeModal = () => {
    const container = containerRef.current;

    if (!container) return;

    setIsShow(false);
    setTimeout(() => {
      container.remove();
    }, 300);
  };

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <Container ref={containerRef}>
      <Wrapper isShow={isShow}>
        <SmileIcon />
        <Title>安裝至主畫面</Title>
        <Description>您好，高抬貴手按下確認</Description>
        <Button onClick={handleConfirm}>確認</Button>
        <Button onClick={closeModal}>先不要</Button>
      </Wrapper>
    </Container>
  );
};

Modal.propTypes = {
  onConfirm: PropTypes.func,
};

Modal.defaultProps = {
  onConfirm: () => {},
};

export default Modal;
