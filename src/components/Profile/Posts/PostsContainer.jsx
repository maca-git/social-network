import React from 'react';
import StoreContext from '../../../StoreContext';
import { addPostActionCreator, onPostChangeActionCreator } from './../../../redux/profile-reduser';
import Posts from './Posts';

const PostsContainer = () => {
  return (
    <StoreContext.Consumer> 
      { 
        (store) => {
          let state = store.getState();
          
          let onAddPost = () => { 
            store.dispatch(addPostActionCreator());
          }
    
          let onPostChange = (text) => {
            store.dispatch(onPostChangeActionCreator(text));
          }
          return <Posts 
                  updateNewPostText={onPostChange} 
                  addPost={onAddPost} 
                  posts={state.profilePage.postsData} 
                  newPostText={state.profilePage.newPostText}
                />
        }
      }
    </StoreContext.Consumer>
  )
}

export default PostsContainer;