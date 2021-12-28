import { useEffect, useState } from "react";

function Tmatrix(props) {

const [players,setPlayers] = useState(0)

useEffect(()=>{
    setPlayers(props.playercount)
},[players,props.playercount])

// creates list item
const createlistItem=(num)=>{
    var elements = [];
    for(var i =0; i < num; i++){
        elements.push(
            <li   class="media">
                Table here            
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