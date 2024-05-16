import React from "react";
import {Route, Routes } from "react-router-dom";

import LoginPage from './pages/loginPage';
import RegistroPage from "./pages/RegistroPage";
import Inicio from './pages/inicio';
import AdministrarUsurio from './pages/administrarUsuarios';




const App = () => {
return (
<>
<Routes>
        <Route path="/" element={<LoginPage />} />  
        <Route path="/registro" element={<RegistroPage />} />  
        <Route exact path="/inicio" element={<Inicio/>}></Route>
        <Route exact path="/administarusuario" element={<AdministrarUsurio/>}></Route>
</Routes>
</>
);
};
export default App;