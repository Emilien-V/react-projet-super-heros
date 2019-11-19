import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link activeClassName="active" className="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link activeClassName="active" className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClassName="active" className="nav-link" to="/list">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClassName="active" className="nav-link" to="/battle">Battle</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}