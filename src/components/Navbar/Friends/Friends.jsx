import React from 'react';
import Friend from './Friend/Friend';
import style from './Friends.module.css';

const Friends = (props) => {
  let friendsElements = props.friendsData.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>);

  return (
    <div className={style.friends}>
      <h4>Friends</h4>
      <div className={style.friendsContainer}>
        {friendsElements}
      </div>
    </div>
  )
}

export default Friends;