import React from 'react'
import { Link } from "react-router-dom";

const Header = (props) => {
    const { onChangeView, refresh, isListView } = props;

    return (
        <nav>
            <div className="nav-wrapper">
            <a href="#" class="brand-logo center">BIT Users</a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to='/about'>About</Link></li>
                    <li><a onClick={refresh}><i className="material-icons">refresh</i></a></li>
                    <li><a onClick={onChangeView} ><i className="material-icons">{ isListView ? "apps" : "list" }</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header