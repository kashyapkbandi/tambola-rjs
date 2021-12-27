import { useState } from 'react';
import '../App.css'

function Rightcounter({setStrikedList}) {
const [striked,setStriked] =  useState(); // Initially 0 Number to be shown
const [strikedarray,setStrikedarray] = useState([0]); // initially the array is empty

// handle shuffle logic and store it in an array
const handleShuffle=(event)=>{
    let generatedValue = generateRandomNum();
    setStrikedarray(oldstrikedarray=> [...oldstrikedarray,generatedValue]);
    console.log("strikedarray - "+strikedarray);
    setStriked(generatedValue); // set this to display
    console.log("striked - "+striked);

    setStrikedList(oldstrikedList=> [...oldstrikedList,generatedValue]);

}

const generateRandomNum=()=>{
    //console.log( Math.floor(Math.random() * (91 - 1) + 1));
    return Math.floor(Math.random() * (91 - 1) + 1);
}



    return(
      
        <div class="card">
        <div class="card-body rightcounter-card-body">
        <button type="button" class="btn btn-primary btn-lg" onClick={handleShuffle}>Check Number</button>
        <br></br>  <br></br>
        <div className="card" style={ {padding :"0px"}}>
        <h1 style={{text :"10rem",color: "red"}}>{striked}</h1>
        </div>
            </div>
            
            
            </div>
     );
}


export default Rightcounter