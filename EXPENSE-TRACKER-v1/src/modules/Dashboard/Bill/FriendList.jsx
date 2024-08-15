import { Friend } from "./Friend"

export const FriendList = ({share, friendGroup}) => {
  const border={
    border:"1px solid grey",
    margin:"1px"
  }
  const displayy={
    display:"flex",
    justifyContent:"space-around",
  }
  return (
    <div>
        <div className="row" style={border}>
           <div style={displayy}> 
            <h3>Name</h3>
            <h3>Share</h3>
            </div>
          {friendGroup.map((friend,key)=><Friend key={friend.id} friend={friend} share={share} />)}
       
        </div>
    </div>
  )
}
