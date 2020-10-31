import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from './../../../redux/profile-reducer';
import Posts from './Posts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost(post) {
      dispatch(addPostActionCreator(post));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;