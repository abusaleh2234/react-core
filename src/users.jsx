import { use } from "react";

const Users = ({loadUsers}) => {
    const users = use(loadUsers);
    console.log(users);
    
    return (
        <div className='card'>
            <h2>Users: {users.length}</h2>
        </div>
    );
};

export default Users;