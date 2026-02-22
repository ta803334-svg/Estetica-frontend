import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Sobre from "./pages/Sobre";


function  AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}> </Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Formulario" element={<Formulario/>}> </Route>
                <Route path="/Sobre" element={<Sobre/>}> </Route>  
                 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes