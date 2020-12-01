import React from 'react';
import PropTypes from 'prop-types';
import { Container, ImageWrapper, Image, Text } from './style';

const Avatar = ({ size, text, imageUrl }) => {
  return (
    <Container>
      <ImageWrapper size={size + 4}>
        <Image size={size} src={imageUrl} alt="" />
      </ImageWrapper>
      {text && <Text>{text}</Text>}
    </Container>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
};

Avatar.defaultProps = {
  size: 32,
  imageUrl: `https://image.flaticon.com/icons/png/128/924/924874.png`,
};

export default Avatar;
