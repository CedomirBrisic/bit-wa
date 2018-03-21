import React from 'react'

const getDate = (date) => {
    const myDate = new Date(date)
    const year = myDate.getFullYear();
    const month = myDate.getMonth();
    const day = myDate.getDate()
    return (`${day}-${month}-${year}`)
}


const hideEmail = (email) => {
    var part1 = email.slice(3,email.indexOf("@")-3);
    var hidden = email.replace(part1,"...");
    return hidden;
}

const UserItem = (props)=>{
    const {user} = props
    return(
        <li className="collection-item avatar">
        <img src={user.photo} alt="" className="circle"/>
        <span className="title">{user.firstName}</span>
        <p>{hideEmail(user.email)} <br/>
        {getDate(user.birthday)}
        </p>
        
      </li>
    )
}

const UserGrid = (props) =>{
const {user} = props
return (


    <div className="col s3">
        <div className="card">
            <div className="card-image">
                <img src={user.photo} alt ="Shone CAR"/>
                    <span className="card-title">{user.firstName}</span>
            </div>
                <div className="card-content">
                    <p>{hideEmail(user.email)} <br/> {getDate(user.birthday)}</p>
                </div>
            </div>
        </div>



)

}
    export{
        UserItem,
        UserGrid
    }