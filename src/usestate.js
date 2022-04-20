import { useState } from 'react'
import   '../node_modules/bootstrap/dist/css/bootstrap.min.css'  
export const Usestatecomp=()=>
{
    const [count,countfn]=useState(0)
    const hey=()=>{
           countfn(count+1)
    }

  
    return(
        <>
        <button class="btn btn-outline-danger" onClick={hey} onDoubleClick={()=>{countfn(0)}}> Clicked count is {count}</button>
        {(count===0)?<h5 style={{color:'olive'}}>use state button is zero</h5>:<h5>use state button {count}</h5>}
        </>
    )

}