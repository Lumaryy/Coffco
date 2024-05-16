import React, { useState } from "react";

const RegistroComponent = () => {
    const [loginValues, setLoginValues] = useState({ userNumber: "", password: "" });

    const handleLoginChange = (event) => {
        setLoginValues({
            ...loginValues,
            [event.target.name]: event.target.value
        });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        // Lógica para manejar el inicio de sesión
        console.log("Login attempt", loginValues);
    };

    return (
        <div className="card w-full max-w-md shadow-lg rounded-md">
            <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
                    <label className="label">
                        <span className="label-text" style={{ color: '#586E26' }}>Nombre</span>
                    </label>
                    <input style={{ backgroundColor: '#B1C483'}} type="text" name="userNumber" placeholder="Nombre" className="input input-bordered" value={loginValues.userNumber} onChange={handleLoginChange} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text" style={{ color: '#586E26' }}>Número de documento</span>
                    </label>
                    <input style={{ backgroundColor: '#B1C483'}} type="text" name="userNumber" placeholder="Número de documento" className="input input-bordered" value={loginValues.userNumber} onChange={handleLoginChange} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text" style={{ color: '#586E26' }}>Direccion</span>
                    </label>
                    <input style={{ backgroundColor: '#B1C483'}} type="text" name="userNumber" placeholder="Direccion" className="input input-bordered" value={loginValues.userNumber} onChange={handleLoginChange} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text" style={{ color: '#586E26' }}>Email</span>
                    </label>
                    <input style={{ backgroundColor: '#B1C483'}} type="text" name="userNumber" placeholder="Email" className="input input-bordered" value={loginValues.userNumber} onChange={handleLoginChange} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text" style={{ color: '#586E26' }}>Cargo</span>
                    </label>
                    <input style={{ backgroundColor: '#B1C483'}} type="text" name="userNumber" placeholder="Número de documento" className="input input-bordered" value={loginValues.userNumber} onChange={handleLoginChange} required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text" style={{ color: '#586E26' }}>Contraseña</span>
                    </label>
                    <input style={{ backgroundColor: '#B1C483'}} type="password" name="password" placeholder="Contraseña"  className="input input-bordered" value={loginValues.password} onChange={handleLoginChange} required />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control mt-3">
                    <button href="/" type="submit" className="btn btn-primary" style={{ backgroundColor: '#586E26', border: 'none', color: '#fff' }}>Registrarse</button>
                </div>
            </form>
        </div>
    );
};

export default RegistroComponent;
