import React from 'react';
import NavBarMenu from './NavBarMenu';

function Menu() {
    return <>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-md">
                <a className="navbar-brand">Calculadora de impuestos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarMenu" aria-controls="navBarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavBarMenu/>
            </div>
        </nav>
    </>
}

export default Menu;