import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import placeInfo from '../../FakeData/fakeData.json'
import PlaceInformation from '../PlaceInformation/PlaceInformation';

const Destination = () => {
    const { id } = useParams();
    const [place,setPlace] = useState({
        placeState:false,
        fromPlace:'',
        wherePlace:''
    });
    // useEffect(()=>{
    //  setPlace(placeInfo);
    // },[])
    return (
        <div>
            <h1>this is destination</h1>

            <div class="card" style={{width:"20%"}} >
                <div class="card-body">
                   
                    <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Pick FROM</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                        </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Pick To</label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                            </div>
                    </form>
                    <div>
                        h1
                    </div>
                            <a href="#" class="btn btn-primary">Search</a>
                        </div>
                </div>
                </div>
    );
};

export default Destination;