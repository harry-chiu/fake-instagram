import React from 'react';
import { navigate, useLocation } from '@reach/router';
import get from 'lodash/get';
import {
  AiFillHome as HomeFillIcon,
  AiOutlineHome as HomeOutlineIcon,
  AiFillHeart as HeartFillIcon,
  AiOutlineHeart as HeartOutlineIcon,
} from 'react-icons/ai';
import { IoIosSearch as SearchOutlineIcon } from 'react-icons/io';
import { IoSearchSharp as SearchSharpIcon } from 'react-icons/io5';
import {
  RiUserFill as UserFillIcon,
  RiUserLine as UserOutlineIcon,
} from 'react-icons/ri';
import { CgAddR as AddIcon } from 'react-icons/cg';
import { Container, IconWrapper } from './style';

const TabBar = () => {
  const location = useLocation();
  const pathname = get(location, 'pathname');

  const handleNavigate = path => () => navigate(path);

  return (
    <Container>
      <IconWrapper onClick={handleNavigate('home')}>
        {pathname === '/home' ? <HomeFillIcon /> : <HomeOutlineIcon />}
      </IconWrapper>
      <IconWrapper onClick={handleNavigate('search')}>
        {pathname === '/search' ? <SearchSharpIcon /> : <SearchOutlineIcon />}
      </IconWrapper>
      <IconWrapper>
        <AddIcon />
      </IconWrapper>
      <IconWrapper onClick={handleNavigate('heart')}>
        {pathname === '/heart' ? <HeartFillIcon /> : <HeartOutlineIcon />}
      </IconWrapper>
      <IconWrapper onClick={handleNavigate('user')}>
        {pathname === '/user' ? <UserFillIcon /> : <UserOutlineIcon />}
      </IconWrapper>
    </Container>
  );
};

export default TabBar;
