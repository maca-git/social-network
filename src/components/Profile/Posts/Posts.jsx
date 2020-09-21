import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';

const Posts = (props) => {
  let postsElements = props.postsData.map(post => <Post message={post.message} />);

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