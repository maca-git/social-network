import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode &&
        <span onDoubleClick={activateEditMode}>
          {props.status || "-------------"}
        </span>
      }
      {editMode &&
        <div onBlur={deactivateEditMode}>
          <input onChange={onStatusChange} autoFocus={true} value={status}/>
        </div>
      }
    </div>
  )
}

export default ProfileStatus;