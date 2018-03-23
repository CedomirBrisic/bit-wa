import React, { Component } from 'react';
import { Link } from "react-router-dom"

const NewPost = () => {
    return (
        <main className="content">
            <div className="container">
                <h1>NEW POST</h1>

                <h3>Title</h3>
                <input type="text" className="titleImput" />
                <h3> Content </h3>

                <textarea rows="4" cols="50"></textarea>
                <br />
                <div className="btnNew">
                    <button>Cancel</button>
                    <Link to="../" ><button>Save</button></Link>
                </div>
            </div>
        </main>
    )
}

export default NewPost