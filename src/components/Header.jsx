import React from "react";
import logoFB from '../img/fb.png';
import logoIG from "../img/ig.png";
import logoTW from "../img/tw.png";
import botonModoOscuro from "../img/botonModoOscuro.jpg";
import botonModoClaro from "../img/botonModoClaro.jpg";

const Header = (props) => {
    return (
        <div>
            <nav id="menu">
                <ul>
                    <a href="https://www.facebook.com/Virbela"><img id="logoFB" src={logoFB} alt="logoFB"/></a>
                    <a href="https://www.instagram.com/virbelahq/"><img id="logoIG" src={logoIG} alt="logoIG"/></a>
                    <a href="https://twitter.com/VirbelaHQ"><img id="logoTW" src={logoTW} alt="logoTW"/></a>
                    <a href="./index.html">Inicio</a>
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#registroModal">
                    Registrate Ahora!
                    </button>
                    <a href="#" onClick={props.handleTemaClick}>
                        <img id="botonModo" src={document.querySelector("html").getAttribute("data-bs-theme") === "light" ? botonModoOscuro : botonModoClaro} alt="botonModo" title="Modo Oscuro / Modo Claro"/>
                    </a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;