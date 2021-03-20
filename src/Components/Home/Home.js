import React, { useEffect, useState } from 'react';
import './Home.css';
import transportData from '../../FakeData/fakeData.json';
import Transport from '../Transport/Transport';



const Home = () => {
    const [transport, setTransport] = useState([]);
    useEffect(() => {
        setTransport(transportData);
        // console.log(transportData)
    }, [])
    return (
        <div className="container background">
           
            
            <div className="row">
             {
                transport.map(transport => <Transport transport={transport}></Transport>)
            
             }
             </div>
            
            </div>
    );
};

export default Home;