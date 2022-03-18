
import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./nav.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <li className="navbar">
            <li className="navbar__item">
                <Link className="navbar_item" to="/">WELCOME HOME</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/CreateScrapbook">CREATE BOOK</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/MyBooks">REMINISCE</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="/uploadImages">UPLOAD PHOTOS</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar_item" to="scrapbookFeed">HITCHIKE</Link>
            </li>
           
            
            {
                (localStorage.getItem("token") !== null) ?
                    
                        <button className="nav-linkButton"
                            onClick={() => {
                                localStorage.removeItem("token")
                                history.push({ pathname: "/" })
                            }}
                        >SAY GOODBYE</button>
                     :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </li>
    )
}