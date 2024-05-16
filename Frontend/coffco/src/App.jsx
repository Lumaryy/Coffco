import React from "react";
import {Route, Routes } from "react-router-dom";

import LoginPage from './pages/loginPage';
import RegistroPage from "./pages/RegistroPage";
import Inicio from './pages/inicio';
import AdministrarUsurio from './pages/administrarUsuarios';
import TrillaPage from "./pages/TrillaPage.jsx";




const App = () => {
return (
<>
<Routes>
        <Route path="/" element={<LoginPage />} />  
        <Route path="/registro" element={<RegistroPage />} />  
        <Route exact path="/inicio" element={<Inicio/>}></Route>
        <Route exact path="/administarusuario" element={<AdministrarUsurio/>}></Route>
        <Route path="/trilla" element={<TrillaPage/>}></Route>
</Routes>
</>
);
};
export default App;