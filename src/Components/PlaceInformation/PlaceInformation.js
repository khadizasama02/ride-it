import React from 'react';

const PlaceInformation = (props) => {
   console.log(props.passengerInfo);
    const{fare,capacity,name} = props.passengerInfo[0];
    console.log(fare);
    return (
        <div>
           <p style={{border:"1px solid black",borderRadius:"10px",padding:'10px',background:"#D6A2E8"}}>name:<bold>{name}</bold> fare:<bold>{fare}</bold> capacity:<bold>{capacity}</bold></p>
           {/* <p style={{border:"1px solid black",borderRadius:"10px",padding:'10px',background:"#D6A2E8"}}>capacity:{capacity}</p> */}
            </div>
    );
};

export default PlaceInformation;