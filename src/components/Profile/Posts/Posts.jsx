import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';

const Posts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "Its my fists post!" },
  ]
  let postsElements = postsData.map(post => <Post message={post.message} />);

  return (
    <div className={style.posts}>
      <div className={style.create}>
        <textarea></textarea>
        <button>Send</button>
      </div>
      { postsElements }
    </div>
  )
}

export default Posts;