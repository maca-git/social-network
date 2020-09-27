import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from './../../../redux/profile-reduser';
import Posts from './Posts';

const PostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => { 
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.store.dispatch(onPostChangeActionCreator(text));
  }

  return (
    <Posts 
      updateNewPostText={onPostChange} 
      addPost={onAddPost} 
      posts={state.profilePage.postsData} 
      newPostText={state.profilePage.newPostText}
    />
  )
}

export default PostsContainer;