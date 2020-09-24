const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "Its my fists post!" },
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Alexey" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Sergey" },
      ],
      messagesData: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "Yo!" },
      ]
    },
    navbarState: {
      friendsData: [
        { id: 1, name: "Anna", avatar: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/128771571/original/c540edc5830213c6de3243d97061c3f12cdc2d3b/design-a-digital-icon-of-your-roblox-character.png"},
        { id: 2, name: "Ivan", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuCwcYJIQnwXyQcyN8DdYfM0UDCUd_gprKEQ&usqp=CAU"},
        { id: 3, name: "Igor", avatar: "https://pm1.narvii.com/6544/9e5275d11654e09a0786ea750c4c9f64ccee5a58_hq.jpg"}
      ]
    }
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  _addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default store;