import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import size from 'lodash/size';
import Card from 'components/Card';
import { Container } from './style';
import 'firebase/database';

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref('/ig/posts')
      .once('value', snapshot => {
        const postListFromDatabase = snapshot.val();
        if (!postListFromDatabase || !size(postListFromDatabase)) return;

        setPostList(postListFromDatabase);
      });
  }, []);

  return (
    <Container>
      {postList &&
        postList.map((post, index) => (
          <Card
            key={`post-${index}`}
            likes={post.likes}
            account={post.account}
            content={post.content}
            imageSrc="https://picsum.photos/400/300"
          />
        ))}
    </Container>
  );
};

export default Home;
