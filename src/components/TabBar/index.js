import React, { useContext } from 'react';
import firebase from 'firebase/app';
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
import NetworkContext from 'context/NetworkContext';
import storePost from 'utils/storePost';
import { Container, IconWrapper } from './style';
import 'firebase/database';

const TabBar = () => {
  const network = useContext(NetworkContext);
  const location = useLocation();
  const pathname = get(location, 'pathname');

  const handleNavigate = path => () => navigate(BASEPATH + path);

  const handleAddPost = () => {
    const newPost = {
      account: 'hellohi1106',
      content: `養豬升等領券 街口優惠無限\n固定每日14:00更新，釋出數量有限記得設定鬧鐘唷！`,
      likes: new Date().getSeconds(),
    };

    if (network) firebase.database().ref('/posts').update(newPost);
    else storePost(newPost);
  };

  return (
    <Container>
      <IconWrapper onClick={handleNavigate('')}>
        {pathname === '/' ? <HomeFillIcon /> : <HomeOutlineIcon />}
      </IconWrapper>
      <IconWrapper onClick={handleNavigate('search')}>
        {pathname === '/search' ? <SearchSharpIcon /> : <SearchOutlineIcon />}
      </IconWrapper>
      <IconWrapper onClick={handleAddPost}>
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
