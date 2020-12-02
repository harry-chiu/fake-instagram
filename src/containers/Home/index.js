import React, { useContext } from 'react';
import Card from 'components/Card';
import PostContext from 'context/PostContext';
import { Container } from './style';
import 'firebase/database';

const Home = () => {
  const { postList } = useContext(PostContext);

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
