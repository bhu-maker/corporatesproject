import { Corpnavigation } from "./corpnavigation"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Corporateform} from "./corporateform"
import {Home} from './home'
import {Read} from './read'
import {Edit} from './edit'

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
              <Route path="gett/up/id/:para2" exact element={<Edit/>}></Route>
          </Routes>
        </BrowserRouter>
        </>
    );
}

export default Corporateapp