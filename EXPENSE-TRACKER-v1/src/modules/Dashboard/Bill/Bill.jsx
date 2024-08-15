import React from 'react'
import { FriendList } from './FriendList'

export const Bill = ({bill,activity,share, friendGroup}) => {

const myStyle={
    height:"30vh", 
    backgroundColor:"black", 
    color:"white", 
    padding:"40px",
    textAlign:"center"
}

  return (
    <div>
    <div style={myStyle}>
    <h1>TOTAL BILL : <h2>{bill}</h2></h1>
    Description{activity}
    </div>
    <div className="friend-list">
    <div className="friends">
      <FriendList friendGroup={friendGroup} share={share}></FriendList>
     </div>
    </div>
    </div>
  )
}
