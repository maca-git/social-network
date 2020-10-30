import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import style from './Posts.module.css';
import { Element } from '../../common/FormsControls/FormsControls';

const Textarea = Element("textarea");
const maxLength100 = maxLengthCreator(100);

const Posts = React.memo((props) => {
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
})

const AddPostForm = (props) => {
  return(
    <form className={style.create} onSubmit={props.handleSubmit}>
      <Field component={Textarea} name="post" validate={[required, maxLength100]} />
      <button>Send</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm({
  form: 'addPost'
})(AddPostForm)

export default Posts;