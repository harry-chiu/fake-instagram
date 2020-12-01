import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import PlaceholderSvg from 'images/placeholder.svg';
import { FiSend as SendIcon } from 'react-icons/fi';
import { IoIosMore as MoreIcon } from 'react-icons/io';
import { BiBookmark as BookmarkIcon } from 'react-icons/bi';
import { AiOutlineHeart as HeartIcon } from 'react-icons/ai';
import { IoChatbubbleOutline as ChatIcon } from 'react-icons/io5';
import {
  Container,
  Header,
  Account,
  Settings,
  Body,
  ImageWrapper,
  Image,
  FeatureBar,
  MainFeature,
  SubFeature,
  Likes,
  Footer,
  Content,
} from './style';

const Card = ({ likes, account, content }) => (
  <Container>
    <Header>
      <Avatar size={24} />
      <Account>{account}</Account>
      <Settings>
        <MoreIcon />
      </Settings>
    </Header>
    <Body>
      <ImageWrapper>
        <Image src={PlaceholderSvg} alt="" />
      </ImageWrapper>
      <FeatureBar>
        <MainFeature>
          <HeartIcon />
          <ChatIcon />
          <SendIcon />
        </MainFeature>
        <SubFeature>
          <BookmarkIcon />
        </SubFeature>
      </FeatureBar>
      {likes && <Likes>{likes} 個讚</Likes>}
    </Body>
    <Footer>
      <Content>
        <Account>{account}</Account>
        {content}
      </Content>
    </Footer>
  </Container>
);

Card.propTypes = {
  likes: PropTypes.number,
  account: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
