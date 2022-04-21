import   '../node_modules/bootstrap/dist/css/bootstrap.min.css'  
import { Useeffectcomp } from './useeffect';
import { Useparamscomp } from './useparams';
import {Usestatecomp} from './usestate'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Navigation } from './navigation';
const App=()=>{
  return (
    <>
    <h1>welcome to corporates!!!!!!</h1>
    {/*<Usestatecomp/>
    <Useeffectcomp/> */}
    <Useparamscomp/>
 
    <BrowserRouter>
       <Navigation/>
      <Routes>
        <Route path="/params/:count" exact element={<Useparamscomp/>}></Route>
        <Route path="/state" exact element={<Usestatecomp/>} ></Route> 
        <Route path="/effect" exact element={<Useeffectcomp/>}></Route>


      </Routes>

    </BrowserRouter>
    
    </>
   
  );
}

export default App;
