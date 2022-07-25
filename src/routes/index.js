import { Routes, Route } from "react-router-dom";


import Main from '../components/Home';
import ModelsCars from '../components/Models';
import Thanks from '../components/Thanks'


const Rotas = () =>{
    return(
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/models' element={<ModelsCars/>}></Route> 
            <Route path='/models/thanks' element={<Thanks/>}></Route> 
        </Routes>
    
    )
}
export default Rotas;