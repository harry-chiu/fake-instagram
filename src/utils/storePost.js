const storePost = post => {
  const postListFromStorage = localStorage.getItem('posts');
  const postList = JSON.parse(postListFromStorage) || [];
  const newPostList = JSON.stringify([...postList, post]);

  localStorage.setItem('posts', newPostList);
};

export default storePost;
