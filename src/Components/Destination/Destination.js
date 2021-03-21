import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import transportData from '../../FakeData/fakeData.json'
import PlaceInformation from '../PlaceInformation/PlaceInformation';

const Destination = () => {

    const { id } = useParams();
    const [place,setPlace] = useState({
        MyLocation : "",
        MyDestination : "",
       
    });
    const[placeInfo,setPlaceInfo]=useState(true)

    const inputEvent=(e)=>
    {
        console.log(e.target.value);
        console.log(e.target.name);
        const value = e.target.value;
        const name = e.target.name;

        setPlace((preValue)=>{
          if(name === 'MyLocation'){
              return{
                  MyLocation: value,
                  MyDestination: preValue.MyDestination
              }
          }
          if(name === 'MyDestination'){
            return{
                MyLocation: preValue.MyLocation,
                MyDestination: value
            }
        }
        })
       
    };

    const onSubmits = (e) =>
    {
        e.preventDefault();
    };
    const handlePlaces = () =>
    {
       
       setPlaceInfo(false);
    }
    
    // const [transport, setTransport] = useState([]);
    // useEffect(() => {
    //     setTransport(transportData);
      
    // }, [])
    // useEffect(()=>{
    //  setPlace(placeInfo);
    // },[])
    return (
        <div>
          

            <div class="card" style={{width:"20%",marginLeft:"100px",marginTop:"100px",background:""}} >
                <div class="card-body" style={{background:"#575fcf"}}> 
                {placeInfo ?   <div>
                   
                    <form onSubmit={onSubmits}>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Pick FROM</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your location"  onChange={inputEvent} value={place.MyLocation} name="MyLocation"/>
                        </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Pick To</label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your destination" name="MyDestination" onChange={inputEvent} value={place.MyDestination} />
                            </div>
                    </form>
                     <a href="#" class="btn btn-primary" onClick={handlePlaces}>Search</a>
                     </div>
                    :
                    <div>
                        <h3 style={{border:"1px solid black",borderRadius:"10px",padding:'10px',background:"#D6A2E8"}}>Pick Up Point</h3>
                        <p style={{border:"1px solid black",borderRadius:"10px",padding:'10px',background:"#D6A2E8"}}>{place.MyLocation}</p>
                        <h3 style={{border:"1px solid black",borderRadius:"10px",padding:'10px',background:"#D6A2E8"}}>Final Destination</h3>
                        <p style={{border:"1px solid black",borderRadius:"10px",padding:'10px',background:"#D6A2E8"}}>{place.MyDestination}</p>
                        
                    </div>

                }
                    
                           
                       
                </div>
                 
                </div>
                </div>
    );
};

export default Destination;