import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';

const Posts = () => {
  return (
    <div className={style.posts}>
      <div className={style.create}>
        <textarea></textarea>
        <button>Send</button>
      </div>
      <Post message='Hi, how are you?' />
      <Post message='Its my fists post!' />
    </div>
  )
}

export default Posts;