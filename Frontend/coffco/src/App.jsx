import React from "react";
import {Route, Routes } from "react-router-dom";
import LoginPages from './pages/loginPage';
import Inicio from './pages/inicio';
import AdministrarUsurio from './pages/administrarUsuarios';
import Registro from './components/EditarUsuarios'
import TrillaPage from "./pages/TrillaPage";


const App = () => {
return (
<>
<Routes>

        <Route exact path="/" element={<LoginPages/>}></Route>
        <Route exact path="/inicio" element={<Inicio/>}></Route>
        <Route exact path="/administarusuario" element={<AdministrarUsurio/>}></Route>
        <Route exact path="/registro" element={<Registro/>}></Route>
        <Route path="/trilla" element={<TrillaPage/>}></Route>
</Routes>

</>
);
};
export default App;