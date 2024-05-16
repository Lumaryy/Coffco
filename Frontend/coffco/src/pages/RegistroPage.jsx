import React from "react";
import RegistroComponent from "../components/RegistroComponent";


const RegistroPage = () => {
    return (
        <div className="login-page flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1>REGISTRO COFFCO</h1>
            <RegistroComponent />
        </div>
    );
};

export default RegistroPage;
