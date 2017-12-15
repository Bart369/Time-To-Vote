import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>{
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Elected Officials</Link></li>
                    <li><Link to='/elections'>Upcoming Elections</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header