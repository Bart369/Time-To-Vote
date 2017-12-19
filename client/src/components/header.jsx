import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) =>{
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Elected Officials</Link></li>
                    <li><Link to='/elections'>Upcoming Elections</Link></li>
                    <li><Link to='/share'>Share Elections</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><button className="logout" onClick={props.logout}>Logout</button></li>
                    {props.user ? <li><p>Hi {props.user.username}</p></li> : null}
                </ul>
            </nav>
        </header>
    )
}

export default Header