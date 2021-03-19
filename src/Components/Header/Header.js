import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <nav  >
                <div className="title-container">
                    <h1>
                        RIDE IT
                    </h1>

                </div>
                <ul className="nav">



                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>

                    <li>
                        <Link to="/login" className="btn-login">Login</Link>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default Header;