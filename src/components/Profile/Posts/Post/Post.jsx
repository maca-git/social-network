import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img src="https://www.kindpng.com/picc/m/137-1370686_anime-avatar-png-transparent-avatar-gaming-logo-png.png" className={style.postavatar} alt="" />
      <p className={style.posttext}>{props.message}</p>
    </div>
  )
}

export default Post;