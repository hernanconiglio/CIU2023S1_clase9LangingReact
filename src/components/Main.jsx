import React from "react";
import metaverse from '../img/metaverse-panel.jpg';


const Main = () => {
    return (
        <div>
            <section id="principal">

                <div className="textosCuerpo">
                    <h1><b>Metaverso: Un vistazo al futuro</b></h1>
                    <p>Evento único en su clase, únete al panel de discusión interactivo con los fundadores de Virbela, Second Life, High Fidelity y otros más!.</p>
                </div>

                <div className="imgFlyer">
                    <img src={metaverse} alt="Flyer"/>
                </div>

                <h2 id="detallesEvento">DETALLES DEL EVENTO</h2>

                <div id="datosEvento" class="container px-4 text-center">
                    <div className="row gx-5">
                    <div className="col">
                    <div className="p-3"><p>Día / Hora</p><p className="datos">15 de Junio, 15hs.</p></div>
                    </div>
                    <div className="col">
                        <div className="p-3"><p>Ubicación</p><p className="datos">Campus de Virbela</p></div>
                    </div>
                    <div className="col">
                        <div className="p-3"><p>Costo del Ticket</p><p className="datos">¡GRATIS!</p></div>
                    </div>
                    </div>
                </div><br/>
            </section>
        </div>
    );
};

export default Main;