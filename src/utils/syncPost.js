import firebase from 'firebase/app';
import 'firebase/database';

const syncPost = () => {
  const postListFromStorage = JSON.parse(localStorage.getItem('posts')) || [];

  const syncAllPost = resolve => snapshot => {
    const postListFromFirebase = snapshot.val() || [];
    const newPostList = [...postListFromStorage, ...postListFromFirebase];

    firebase
      .database()
      .ref('/posts')
      .set(newPostList)
      .then(clearStorage)
      .catch(console.log)
      .finally(resolve);
  };

  const clearStorage = () => localStorage.removeItem('posts');

  return new Promise(resolve => {
    firebase
      .database()
      .ref('/posts')
      .once('value', syncAllPost(resolve))
      .catch(console.log);
  });
};

export default syncPost;
