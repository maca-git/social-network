import React from 'react';
const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");

  // 1. test data
  let state = {
    postsData: [
      { id: 1, message: "Hi, how are you?" },
      { id: 2, message: "Its my fists post!" },
    ]
  }
  

test('length of post should be incremented', () => {
  // 2. action
  let action = addPostActionCreator("new post");
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});

test('message of new post should be correct', () => {
  let action = addPostActionCreator("new post");
  let newState = profileReducer(state, action);
  expect(newState.postsData[2].message).toBe("new post");
});

test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(1);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  let action = deletePost(100);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(2);
});

