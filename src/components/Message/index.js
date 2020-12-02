import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCheck as CheckIcon } from 'react-icons/ai';
import { Container, Wrapper, Text, Background } from './style';

const Message = ({ children }) => {
  const containerRef = useRef(null);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const closeSelf = () => {
      setTimeout(() => {
        setIsShow(false);
      }, 3000);

      setTimeout(() => {
        container.remove();
      }, 3500);
    };

    closeSelf();
  }, [containerRef.current]);

  return (
    <Container ref={containerRef} isShow={isShow}>
      <Wrapper>
        <CheckIcon />
        <Text>{children}</Text>
      </Wrapper>
      <Background />
    </Container>
  );
};

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;
