import { Corpnavigation } from "./corpnavigation"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Corporateform} from "./corporateform"
import {Home} from './home'
import {Read} from './read'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Corporateapp=()=>{
    return(
        <>
        <BrowserRouter>
          <Corpnavigation/>
          <Routes>
              <Route path="/postt" exact element={<Corporateform/>}></Route>
              <Route path="/gett" exact element={<Home/>}></Route>
              <Route path="/gett/:para" exact element={<Read/>}></Route>
          </Routes>
        </BrowserRouter>
        </>
    )
}

export default Corporateapp