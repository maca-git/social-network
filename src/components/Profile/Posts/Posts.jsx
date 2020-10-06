import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';

const Posts = (props) => {
  const postsElements = props.posts.map(post => <Post message={post.message} key={post.id}/>);

  let textarea = React.createRef();

  let onAddPost = () => { 
    props.addPost();
  }

  let onPostChange = () => {
    let text = textarea.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={style.posts}>
      <div className={style.create}>
        <textarea ref={textarea} onChange={onPostChange} value={props.newPostText}/>
        <button onClick={onAddPost}>Send</button>
      </div>
      { postsElements }
    </div>
  )
}

export default Posts;