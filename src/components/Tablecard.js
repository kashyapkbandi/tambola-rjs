function Tablecard(props) {
    return(
        <table className="table table-bordered">
              <tbody>

        <tr>
{props.cardArray[props.i].map((element)=>{
    return (
     <td key={element}>{element}</td>
)

})}
</tr>
</tbody>
</table>
    );
}


export default Tablecard