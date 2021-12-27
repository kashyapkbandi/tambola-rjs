import Lefttable from "./components/Lefttable";
import Rightcounter from "./components/Rightcounter";
import { useState } from "react";

function App() {

  const [strikedList,setStrikedList] = useState([]);

  return (
    <div className="App">
     <div className="container">
     <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://google.com"><h4>Tambola</h4></a>
  </div>
</nav>
<br></br>
  <div className="row">
    <div className="col-8"><Lefttable strikedList={strikedList}/></div>
    <div className="col-4"><Rightcounter setStrikedList={setStrikedList}/></div>
  </div>
</div>
     
    </div>
  );
}

export default App;
