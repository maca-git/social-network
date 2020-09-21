import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  { id: 1, message: "Hi, how are you?" },
  { id: 2, message: "Its my fists post!" },
]
let dialogsData = [
  { id: 1, name: "Dimich" },
  { id: 2, name: "Alexey" },
  { id: 3, name: "Igor" },
  { id: 4, name: "Sergey" }
]
let messagesData = [
  { id: 1, message: "Hello!" },
  { id: 2, message: "Yo!" },
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
