import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';

const Posts = (props) => {
  const postsElements = props.postsData.map(post => <Post message={post.message} />);

  let textarea = React.createRef();

  let addPost = () => { 
    let action = {type: 'ADD-POST'};
    props.dispatch(action);
  }

  let onPostChange = () => {
    let text = textarea.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
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