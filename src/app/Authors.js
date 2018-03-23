import React, { Component } from 'react'
import { Link } from "react-router-dom"
const Authors = () => {
    return (
        <main className="content">
            <div className="info container ">


                <h1 className="white"> Authors (Count) </h1>

                <Link to="./Contact"> <h3 className="white"> Name Surname </h3> </Link>
                <hr />
                <Link to="./Contact"> <h3 className="white"> Name Surname </h3> </Link>
                <hr />
                <Link to="./Contact"> <h3 className="white"> Name Surname </h3> </Link>
                <hr />
                <Link to="./Contact"> <h3 className="white"> Name Surname </h3> </Link>
                <hr />
                <Link to="./Contact"> <h3 className="white"> Name Surname </h3> </Link>
                <hr />


            </div>
        </main>
    )
}


export default Authors