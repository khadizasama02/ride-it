import React from 'react';
import './Transport.css'

const Transport = (props) => {
   
    // const transport = props.transport;
    // console.log(transport);
    const {name,image} = props.transport;
    // console.log(name);
    // console.log(image);

    return (
        <div className="col-md-3 card-style">
          <div class="card " style={{width:"18 rem",height:"300px"}}>
                <img class="card-img-top" src={image} style={{width:"100%"}} alt=""/>
                    <div class="card-body">
                        <h3 class="card-text">{name}</h3>
                    </div>
            </div> 
        </div>
    
           
        
    );
};

export default Transport;