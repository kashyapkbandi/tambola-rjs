import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import {matrixGenerator} from '../utilities/MatrixLogic';
import Tablecard from "./Tablecard";

function Tmatrix(props) {

const [players,setPlayers] = useState(0)
const [cardlist,setCardlist] = useState([new Map()])
const [cardArray,setCardArray] = useState([[]])

useEffect(()=>{
    setPlayers(props.playercount)
    // everytime player count changes
    setCardArray(matrixGenerator());
},[players,props.playercount])




 



const createArray=(numMap)=>{

}


// creates list item
const createlistItem=(players)=>{
    var elements = [];
    for(var i =0; i < players; i++){
        elements.push(
            <li  key={i} class="media">
                <Tablecard i={i} cardArray={cardArray}/>
          </li>);
    }
    return elements;
}


// Handles Matrix generation logic


    return(
        
        <ul class="list-unstyled">
            
{
    
    createlistItem(players)

}
 
      
        </ul>
    );
}

export default Tmatrix