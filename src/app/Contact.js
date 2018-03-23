import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Contact.css"
const Contact = () => {
    return (
        <main className="content">
            <div className=" container">
                <Link to="./Authors">  <p className="all">All authors</p> </Link>
                <div className="contactInfo">
                    <h1 className="mainTitle" > Single Author</h1>
                    <img className="contactImg" src="https://i.pinimg.com/originals/c2/70/f4/c270f4344b0b6e0a400634ae6699bb47.jpg"></img>
                    <h2>Name</h2>
                    <p> bla:<b>hey</b></p>
                    <p> bla:<b>hey</b></p>
                    <p> bla:<b>hey</b></p>
                    <hr />
                </div>
                <br />
                <div className="contactAddress">
                    <h1>Address</h1>

                    <p> bla:<b>hey</b></p>
                    <p> bla:<b>hey</b></p>
                    <p> bla:<b>hey</b></p>

                    <img className="addressImg" src="https://i.pinimg.com/originals/c2/70/f4/c270f4344b0b6e0a400634ae6699bb47.jpg"></img>

                    <hr />
                </div>
                <div className="company">
                    <h1>Company</h1>

                    <p> bla:<b>hey</b></p>
                    <p> bla:<b>hey</b></p>
                </div>
            </div>
        </main>
    )


}

export default Contact