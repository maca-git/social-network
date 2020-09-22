import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';

const Posts = (props) => {
  const postsElements = props.postsData.map(post => <Post message={post.message} />);

  let textarea = React.createRef();
  let addPost = () => { 
    let text = textarea.current.value;
    props.addPost(text);
    textarea.current.value= '';
  }

  return (
    <div className={style.posts}>
      <div className={style.create}>
        <textarea ref={textarea}></textarea>
        <button onClick={addPost}>Send</button>
      </div>
      { postsElements }
    </div>
  )
}

export default Posts;