import { useState, useEffect} from 'react'

function Lefttable({strikedList}) {

const [rows,setRows] = useState([1,2,3,4,5,6,7,8,9])
const [columns,setColumns] = useState([1,2,3,4,5,6,7,8,9,10])
const [tenner,setTenner] = useState(10);
const [coloredNumbers,setColoredNumbers] = useState([]);

useEffect(() => {
    setColoredNumbers(strikedList)
   
  },[strikedList]);

 console.log(strikedList);
     return(
        
        <div className="card">
  <div className="card-body">
  <div> 
            <table className="table table-borderless">
            {
            rows.map((col_number,col_index) => (
                <tr  key={(col_index)}>
             {columns.map((row_number,row_index) => (
               <td key={(col_index*10)+row_number} > <button data-id={(col_index*10)+row_number} type="button" className={(coloredNumbers.includes((col_index*10)+row_number)) ? "btn btn-outline-danger" : "btn btn-light"} style={{width:"5rem"}}>{(col_index*10)+row_number}</button></td>
             ))}</tr>
            ))}
            </table>
     </div>
  </div>
</div>
        
    );
}


export default Lefttable