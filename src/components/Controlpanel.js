import React from "react"
import { useState } from "react"
import Card from "../components/Card"

function Controlpanel(props) {

const [playercount,setPlayercount] = useState(0) // initially player count is 0
const [shuffletoggle,setShuffletoggle] = useState(false); // initially disabled

let countIp = React.createRef();  // React use ref to get input value


// logic which handles the shuffle
const shuffleHandler=(event)=>{
  
        if(countIp.current.value <= 6)
        {
          setPlayercount(countIp.current.value)
         setShuffletoggle(true)
        }else{alert("You can only add 6 people to get 15 unique numbers")}





    event.preventDefault();

}




    return(
        <div className="row">
             <nav class="navbar navbar-light bg-light">
  <button type="button" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
</svg>
              </button>
   <form class="form-inline">
    <div class="input-group">
      <div class="input-group-prepend">
      <button type="button" class="btn btn-primary" onClick={shuffleHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
</svg>
                Shuffle
              </button>&nbsp;
      </div>
      <input type="number" ref={countIp} class="form-control" placeholder="Upto 6" aria-label="Player Count" aria-describedby="basic-addon1" />
    </div>
  </form>
</nav>
  <div class="jumbotron shadow-sm p-3 mb-5 bg-white rounded">
  <Card playercount={playercount} shuffle={shuffletoggle}/>
  
</div>
        </div>
    );
}

export default Controlpanel