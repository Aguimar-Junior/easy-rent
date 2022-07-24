import { Routes, Route } from "react-router-dom";

import Home from '../components/Home';
import Models from '../components/Models';
import Thanks from '../components/Thanks'


const Rotas = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/models' element={<Models/>}></Route> 
            <Route path='/models/thanks' element={<Thanks/>}></Route> 
        </Routes>
    
    )
}
export default Rotas;