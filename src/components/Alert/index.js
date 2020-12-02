import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

const Alert = ({ children }) => {
  const containerRef = useRef(null);
  const [isShow, setIsShow] = useState(true);
  const [network, setNetwork] = useState(window.navigator.onLine);

  const handleOnline = () => setNetwork(true);
  const handleOffline = () => setNetwork(false);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const closeAlert = () => {
    const container = containerRef.current;
    if (!container || !isShow) return;

    setIsShow(false);
    setTimeout(() => {
      container.remove();
    }, 500);
  };

  useEffect(() => {
    if (network) closeAlert();
  }, [network]);

  return (
    <Container ref={containerRef} isShow={isShow} onClick={closeAlert}>
      {children}
    </Container>
  );
};

Alert.propTypes = {
  children: PropTypes.node,
};

export default Alert;
