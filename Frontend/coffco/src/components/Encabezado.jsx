import React from 'react';

const Encabezado = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Coffco</a>
        </div>
        <div className="navbar-end">
          <img src="./public/logo-sena.svg" alt="Logo SENA" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Encabezado;
