import firebase from 'firebase/app';
import 'firebase/database';

const syncPostToFirebase = () => {
  const postListFromStorage = localStorage.getItem('posts');
  const postList = JSON.parse(postListFromStorage);

  return Promise.all(
    postList.map(post => {
      return new Promise(resolve => {
        firebase
          .database()
          .ref('/posts')
          .update(post)
          .catch(console.log)
          .finally(resolve);
      });
    }),
  );
};

export default syncPostToFirebase;
