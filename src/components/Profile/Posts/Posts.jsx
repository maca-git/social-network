import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from './../../../redux/state';

const Posts = (props) => {
  const postsElements = props.postsData.map(post => <Post message={post.message} />);

  let textarea = React.createRef();

  let addPost = () => { 
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = textarea.current.value;
    props.dispatch(onPostChangeActionCreator(text));
  }

  return (
    <div className={style.posts}>
      <div className={style.create}>
        <textarea ref={textarea} onChange={onPostChange} value={props.newPostText}/>
        <button onClick={addPost}>Send</button>
      </div>
      { postsElements }
    </div>
  )
}

export default Posts;