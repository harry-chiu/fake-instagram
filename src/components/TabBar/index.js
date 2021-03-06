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
import PostContext from 'context/PostContext';
import NetworkContext from 'context/NetworkContext';
import storePost from 'utils/storePost';
import showMessage from 'utils/showMessage';
import { Container, IconWrapper } from './style';
import 'firebase/database';

const TabBar = () => {
  const network = useContext(NetworkContext);
  const { updatePosts } = useContext(PostContext);
  const location = useLocation();
  const pathname = get(location, 'pathname');

  const pathEquals = path => BASEPATH + path === pathname;

  const handleNavigate = path => () => navigate(BASEPATH + path);

  const showSuccessMessage = () => {
    if (network) showMessage('新增貼文成功');
    else showMessage('目前沒有網路連線\n貼文會在重新連線後發送');
  };

  const handleAddPost = () => {
    const newPost = {
      account: 'hellohi1106',
      content: `養豬升等領券 街口優惠無限\n固定每日14:00更新，釋出數量有限記得設定鬧鐘唷！`,
      likes: new Date().getSeconds(),
    };

    const addNewPost = snapshot => {
      const postListFromFirebase = snapshot.val() || [];

      const newPostList = [...postListFromFirebase, newPost];

      firebase
        .database()
        .ref('/posts')
        .set(newPostList)
        .then(updatePosts)
        .then(showSuccessMessage)
        .catch(console.log);
    };

    if (network) {
      firebase
        .database()
        .ref('/posts')
        .once('value', addNewPost)
        .catch(console.log);
    } else {
      storePost(newPost);
    }
  };

  return (
    <Container>
      <IconWrapper onClick={handleNavigate('')}>
        {pathEquals('') ? <HomeFillIcon /> : <HomeOutlineIcon />}
      </IconWrapper>
      <IconWrapper onClick={handleNavigate('search')}>
        {pathEquals('search') ? <SearchSharpIcon /> : <SearchOutlineIcon />}
      </IconWrapper>
      <IconWrapper onClick={handleAddPost}>
        <AddIcon />
      </IconWrapper>
      <IconWrapper onClick={handleNavigate('heart')}>
        {pathEquals('heart') ? <HeartFillIcon /> : <HeartOutlineIcon />}
      </IconWrapper>
      <IconWrapper onClick={handleNavigate('user')}>
        {pathEquals('user') ? <UserFillIcon /> : <UserOutlineIcon />}
      </IconWrapper>
    </Container>
  );
};

export default TabBar;
