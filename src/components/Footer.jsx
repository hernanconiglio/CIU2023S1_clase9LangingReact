import React from "react";
import logoFBf from '../img/fb.png';
import logoIGf from "../img/ig.png";
import logoTWf from "../img/tw.png";
import logoLPf from "../img/lp.png";

const Footer = ({redsocial,derechos}) => {
    //Acá pongo el código js que necesito
    //Calculamos el año corriente
    const anio = new Date().getFullYear();
    return (
        <div>
            <div className="container text-center">
                <hr/>
                <div className="row">
                    <div className="col">
                        <a href="./index.html"><img id="botonInicio" src={logoLPf} alt="landingPage" title="Inicio"/></a>
                    </div>
                    <div className="col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68363.68311577225!2d-73.99102750269675!3d40.777935167708364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1ses!2sar!4v1683913047384!5m2!1ses!2sar" width="150" height="100" style={{ border: "none" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col">
                        <div id="redesSociales">
                            <a href="https://www.facebook.com/Virbela"><img id="logoFBf" src={logoFBf} alt="logoFBf"/></a>
                            <a href="https://www.instagram.com/virbelahq/"><img id="logoIGf" src={logoIGf} alt="logoIGf"/></a>
                            <a href="https://twitter.com/VirbelaHQ"><img id="logoTWf" src={logoTWf} alt="logoTWf"/></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="misDatos" className="col">
                        <p>Hernán M. Coniglio</p>
                        <a href="mailto:hernanmarcelo.coniglio@estudiantes.unahur.edu.ar">hernanmarcelo.coniglio@estudiantes.unahur.edu.ar</a>
                        <p>Universidad Nacional de Hurlingham</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;