import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Posts.css"
const Posts = () => {
    return (
        <main className="content">
            <div className="container" >
                <h1 className="slova">POSTS</h1>
                <div className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

                <div className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

                <div className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>

                <div className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <Link to="./posts/new">  <button type="button" class="btn createPostBtn btn-primary btn-lg btn-block">Create Post</button></Link>

            </div>
        </main>
    )
}


export default Posts