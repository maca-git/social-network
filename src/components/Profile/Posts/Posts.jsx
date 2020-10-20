import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import style from './Posts.module.css';

const Posts = (props) => {
  const postsElements = props.posts.map(post => <Post message={post.message} key={post.id}/>);

  let onAddPost = (formData) => { 
    props.addPost(formData.post);
  }

  return (
    <div className={style.posts}>
      <AddPostReduxForm onSubmit={onAddPost}/>
      { postsElements }
    </div>
  )
}

const AddPostForm = (props) => {
  return(
    <form className={style.create} onSubmit={props.handleSubmit}>
      <Field component="textarea" name="post" />
      <button>Send</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm({
  form: 'addPost'
})(AddPostForm)

export default Posts;