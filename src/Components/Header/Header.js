import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    return (
        <div className="container app font-italic">
            <nav  >
                <div className="title-container">
                    <h2 style={{paddingTop:"10px"}}>
                        RIDE IT
                    </h2>

                </div>
                <ul className="nav " style={{fontSize:"17PX"}}>



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
                        <Link to="/login" className="btn-login">{(loggedInUser.email)?(loggedInUser.displayName):'Login'}</Link>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default Header;