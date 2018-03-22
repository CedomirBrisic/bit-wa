import React from "react"
import {Link } from "react-router-dom";

const ShowCard = (props) => {
    return (
        <Link to={`/info/${props.data.id}`}>
        <div className="card m4" style={{width: "250px"}}>
            <img className="card-img-top " src={props.data.image} alt="Card image cap" />
            <div className="card-body">
                <p className="card-text">{props.data.name}</p>
            </div>
        </div>
        </Link>
    )
}

export default ShowCard;