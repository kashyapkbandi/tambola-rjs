import { useState, useEffect} from 'react'
import Tmatrix from './Tmatrix';


function Card(props) {
    console.log("Player count"+props.playercount);

 const [cardtoggle,setCardtoggle] = useState()

 useEffect(()=>{
      setCardtoggle(props.shuffle)
  },[props.shuffle,cardtoggle])

    return(
        <div class="card">
        <div class="card-body">
        { cardtoggle ?<Tmatrix playercount={props.playercount}/> : null }
        </div>
      </div>
    );
}


export default Card