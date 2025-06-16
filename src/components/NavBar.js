import React from 'react';
import { Link } from 'react-router-dom';
import images from "../assets/assets";
import "../styles/components/_navbar.css";
import "../styles/main.css";

function NavBar() {
    return (  
        <nav className="navbar">
            <Link to="/" >
            <img src={images.logo} alt="Company Logo" className="logo"/>
            </Link>
            <ul className='navbar-list'>
                <li className='btn btn-clear'><Link to="/create-poem">CREATE POEM</Link></li>
                <li className='btn btn-color'><Link to="/sign-up">SIGN UP</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;