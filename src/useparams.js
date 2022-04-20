import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useParams} from 'react-router-dom'


export const Useparamscomp=()=>{
    const {count}=useParams()
        return(
        <>
        <button className="btn btn-outline-secondary">use params button click {count} </button>
        {/* v can pass parameter only through path  not simply by using component 
        {(type(count)===String)?<h5>count sent by url is phrase</h5>:<h5>count sent by url is integer</h5>}*/}
        </>
        
    )
}