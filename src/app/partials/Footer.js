import React from "react"
import App from "../App.css"


export const Footer = () => {

    return (
        <footer>
            <nav className="footer navbar navbar-expand-lg bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="footer">
                    <p className="slova">Copyrights (C) Shone ☺ Ceda</p>
                    <div className="navbar-nav">

                    </div>
                </div>
            </nav>
        </footer>
    )
}

export default Footer