export const matrixGenerator=()=>{
    let cards=[];
  let stash=[];

  for(var i=0;i<6;i++)
      {
                let holder=[];
          for(var j=0;j<15;j++)
              {
                // Generate a number
                let genNum = Math.floor(Math.random() * (90 - 1 + 1) + 1);
                // check if stash is empty
                if(stash.length === 0)
                  {
                    // push directly
                      stash.push(genNum);
                    holder.push(genNum);
                  }
                // if shatsh is not empty
                // check if generated num exists 
                else if (!stash.includes(genNum))
                  {
                    stash.push(genNum);
                    holder.push(genNum);
                  }else{j--;}                
          }
        cards.push(holder);
        holder=[];
        // console.log("From Matrix Logic - "+Array.from(cards[i]))

  }
 return cards   
}