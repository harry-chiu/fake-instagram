import React from 'react';
import PropTypes from 'prop-types';
import { Container, ImageWrapper, Image, Text } from './style';

const Avatar = ({ text, imageUrl }) => (
  <Container>
    <ImageWrapper>
      <Image src={imageUrl} alt="" />
    </ImageWrapper>
    <Text>{text}</Text>
  </Container>
);

Avatar.propTypes = {
  text: PropTypes.string,
  imageUrl: PropTypes.string,
};

Avatar.defaultProps = {
  imageUrl: `https://image.flaticon.com/icons/png/128/924/924874.png`,
};

export default Avatar;
