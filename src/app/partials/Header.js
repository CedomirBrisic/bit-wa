import React from "react"
import App from "../App.css"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header>
        <nav className="navbar navbar-expand-lg bg-dark">
            <a className="navbar-brand" href="#">RND BLOG</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="./" >  <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a> </Link>
                    <Link to="./Authors"> <a className="nav-item nav-link" href="#">Authors</a></Link>
                    <Link to="./About">  <a className="nav-item nav-link" href="#">About</a></Link>

                </div>
            </div>
        </nav>
        </header>
    )
}

export default Header
