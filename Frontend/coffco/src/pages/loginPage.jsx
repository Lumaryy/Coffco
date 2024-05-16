import React from "react";
import LoginComponent from "../components/LoginComponent";


const LoginPage = () => {
    return (
        <div className="login-page flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1>LOGIN COFFCO</h1>
            <LoginComponent />
        </div>
    );
};

export default LoginPage;