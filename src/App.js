import   '../node_modules/bootstrap/dist/css/bootstrap.min.css'  
import { Useeffectcomp } from './useeffect';
import { Useparamscomp } from './useparams';
import {Usestatecomp} from './usestate'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App=()=>{
  return (
    <>
    <h1>welcome to corporates!!!!!!</h1>
    <Usestatecomp/>
    <Useeffectcomp/>
    <Useparamscomp/>
    <BrowserRouter>
      <Routes>
        <Route path="/params/:count" exact element={<Useparamscomp/>}>

        </Route>
      </Routes>

    </BrowserRouter>
    
    </>
   
  );
}

export default App;
