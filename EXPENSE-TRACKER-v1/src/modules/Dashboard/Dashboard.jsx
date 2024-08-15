import Header from "../../shared/Components/Header"
import Footer from "../../shared/Components/Footer"
import { Profile } from "./User/Profile"
import { Bill } from "./Bill/Bill"
import { useState, useEffect } from "react"
import { getApiCall } from "../../shared/Services/ApiClient"

export const Dashboard = () => {

const [totalBill, setBill] = useState();
const [share, setShare] = useState();
const [activity, setActivity] = useState();
const [friendList , setFriendList]= useState([]);
const [friendGroup, setGroup] = useState([]);
const [user, setUser] = useState(null);
const [users, setUsers] = useState();
const [errors, setErrors] = useState(null);

useEffect(()=>{
  getUsers();
},[])


const getUsers = async () => {
  try {
    const USERS_ENDPOINT = import.meta.env.VITE_USERS_URL;
    const usersData = await getApiCall(USERS_ENDPOINT);
    console.log("Users are being fetched:", usersData);
    setUsers(usersData); 

  } catch (err) {
    setErrors(err);
    console.log("Error fetching users:", err);
  }
};

useEffect(() => {
  if (users && users.length > 0) {
    const fetchedUser = getUser(users, "@yuktadandeva", "yukta");
    console.log("User is being fetched:", fetchedUser);
    setUser(fetchedUser);
  }
    console.log(users);
}, [users]);

const getUser = (users, userId, password) => {
  const userProfile = users.find((user) => user.userId === userId && user.password === password);
  return userProfile ? userProfile : console.log("WRONG DETAILS OR NO SUCH USER");
};

const getUserFriendList = (users,userId)=>{
const user = users.find((user)=> user.userId == userId);
return user ? user.friendList : console.log("user not found");
}

useEffect(() => {
if(users && users.length>0){
setFriendList(getUserFriendList(users, "@yuktadandeva"));
}
}, [users]); 

useEffect(() => {
console.log(friendList);
}, [friendList]);


const findingFriend= (userId)=>{
  const friend = friendList.find((friend)=> friend.id == userId);
  console.log('friend', friend)
  return friend;
}

useEffect(() => {
  console.log("Friends in Group:", friendGroup);
  console.log("total friends", friendGroup.length);
}, [friendGroup]);

const handleAdd =(e)=>{
  const userId = e.target.id; 
  console.log(userId)
  const friend = findingFriend(userId);
  if (friend) {
    setGroup((prevFriends) => [...prevFriends, friend]);
  }else {
    console.log("User not found");
  }
}

const handleBill= (e)=>{
 setBill(e.target.value);
}
const handleClick=()=>{
  calculateShare(totalBill);
}
const handleActivity=(e)=>{
  setActivity(e.target.value);
  console.log(e.target.value)
}
const calculateShare=()=>{

  setShare(parseFloat(totalBill/friendGroup.length).toFixed(2));
}

useEffect(() => {
  console.log(share);
}, [share]);


const font={fontFamily:"Mulish"}
const myStyle ={border:"1px solid grey"}
const margin ={margin:"50px"}

return (
    <div style={font}>
      <Header></Header>
    <div className="container" >
        <div className="row" style={margin}>
            <div className="col-8" >
                <div className="totalMoney">
                 <Bill bill={totalBill} activity={activity} share={share} friendGroup={friendGroup}></Bill>
                </div>
            </div>
            <div className="col-4" style={myStyle}>
                <Profile billHandled={handleBill} splitBill={handleClick} activityHandled={handleActivity} userFriendList={friendList} add={handleAdd} user={user} ></Profile>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
  )
}
