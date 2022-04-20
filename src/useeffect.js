import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export const Useeffectcomp=()=>{
    const[count,countfn]=useState(20)
    const hey=()=>{
        countfn(count+5)}

    useEffect(()=>{countfn(1000)},[])
    return(
        <>
        {/* <button className="btn btn-outline-success">useeffect clicked 0</button>*/}
        <button className="btn btn-outline-success" onClick={hey} onDoubleClick={()=>{countfn(0)}}>useeffect clicked {count}</button>
        {(count%2===0)?<h1 style={{color:'purple'}}>use effect button even</h1>:<h1>use effect button odd</h1>}
        </>
    )
}