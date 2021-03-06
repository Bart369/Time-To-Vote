import React from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

const Header = (props) =>{
    return (
        <header>
            <nav>
                <i className="fa fa-star" aria-hidden="true"></i>
                <ul>
                    <li><Link to='/'>Elected Officials</Link></li>
                    <li><Link to='/elections'>Upcoming Elections</Link></li>
                    {/* <li><Link to='/share'>Share Elections</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    {props.user ? <li><button className="logout" onClick={props.logout}>Hi {props.user.username}, Logout?</button></li> : null} */}
                </ul>
            </nav>
        </header>
    )
}

export default Header