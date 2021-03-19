import React, { useEffect, useState } from 'react';
import './Home.css';
import transportData from '../../FakeData/fakeData.json';
import Transport from '../Transport/Transport';
import { Link } from 'react-router-dom';


const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect(() => {
        setTransport(transportData);
        // console.log(transportData)
    }, [])
    return (
        <div className="container background">
           
            <Link to="/destination" className="link">
            <div className="row">
             {
                transport.map(transport => <Transport transport={transport}></Transport>)
            }
            
             </div>
            </Link>
            </div>
    );
};

export default Home;