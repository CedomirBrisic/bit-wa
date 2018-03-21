import React from 'react';
import { UserItem, UserGrid } from "./UserItem"

const UserList = (props) => {
    const { users, isListView } = props;
    return (
      
        <ul className="collection">

            <div className="row" >

                {
                    users.map((user, index) => {
                        return isListView ?
                            <UserItem key={index} user={user} /> :
                            <UserGrid key={index} user={user} />
                    })
                }
            </div>
        </ul> 
          )
}

// class UserList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             insertMethod: UserItem,
//         }
//     }

//     render() {
//         return (
//             <ul className="collection">
//                 <div className="row">
//                     {
//                         users.map((user, index) => {
//                             return <UserItem key={index} user={user} />
//                         })

//                     }
//                 </div>
//             </ul>
//         )
//     }
// }

export default UserList



