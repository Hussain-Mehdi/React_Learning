import React from 'react'
import'./UserList.css';
import ListItem from './ListItem';
export default function UserList(props) {

  const deleteItemHandler=(key)=>{
    console.log("here is key: "+key);
    props.deleteHandler(key)
  }
  return (
    <div className='userList-container'>
      {props.userData.map((e)=>(<ListItem key={e['key']} onDelete={deleteItemHandler} userData={e}/>))}
    </div>
  )
}
