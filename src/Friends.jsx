import { use } from "react";
import Friend from "./Friend";

const Friends = ({loadFriends}) => {
    const friends = use(loadFriends)
    // console.log(friends);
    
    return (
        <div className="card">
            <h2>Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;