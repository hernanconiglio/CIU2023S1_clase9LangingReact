import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react'; //Importamos el hook useState

function App() {

  //Creamos nuestro primer hook pero no lo vamos a usar por ahora
  const [servicios, agregarServicio] = useState(
    [
      {id: 1, nombre: "Consulta", precio: 2500},
      {id: 2, nombre: "Royal Canin 1Kg", precio: 2000},
      {id: 3, nombre: "Vacunación", precio: 3000}
    ]
  ); // la constante es servicios. agregarServicio es la función que modifica el estado
  
  // Función para manejar el envío del formulario
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Obtenengo los valores ingresados en los campos del formulario
    const nombre = document.getElementById("inputNombre").value;
    const apellido = document.getElementById("inputApellido").value;
    const email = document.getElementById("inputEmail4").value;
    const direccion = document.getElementById("inputAddress").value;
    const ciudad = document.getElementById("inputCity").value;
    const provincia = document.getElementById("inputState").value;
    var novedades = document.getElementById("gridCheck").checked ? 'Si' : 'No';
    const profes = "gabriel.molina@unahur.edu.ar,jesusnicolas.rios@unahur.edu.ar"

    // Crear el cuerpo del correo electrónico a enviar con los datos del formulario
    const cuerpoEmail = `Nombres: ${nombre}%0AApellidos: ${apellido}%0AEmail: ${email}%0ADirección: ${direccion}%0ACiudad: ${ciudad}%0AProvincia: ${provincia}%0ANovedades: ${novedades}`;

    // Abro el programa de correo electrónico predeterminado del usuario y completo campos
    window.location.href = `mailto:${profes}?subject=Primer Parcial 2023C1 Coniglio Hernan&body=${cuerpoEmail}`;
    alert("Gracias por registrarte, te enviaremos un correo electrónico con tu Nro de Ticket.");
    window.open("./index.html", "_self");
  };


    // Función para manejar el cambio de tema
    const handleTemaClick = () => {
      var botonTema = document.querySelector("#botonModo");
      var modoActual = document.querySelector("html").getAttribute("data-bs-theme");
  
      if (localStorage.getItem("tema") === null) {
          localStorage.setItem("tema", document.querySelector("html").getAttribute("data-bs-theme"));
      } else {
          document.querySelector("html").setAttribute("data-bs-theme", localStorage.getItem("tema"));
      }
  
      if (modoActual == "light") {
          document.querySelector("html").setAttribute("data-bs-theme", "dark");
          modoActual = "dark";
          localStorage.setItem("tema", "dark");        
      } else {
          document.querySelector("html").setAttribute("data-bs-theme", "light");
          modoActual = "light";
          localStorage.setItem("tema", "light");
      }
    }



  return (
    <div>
      <Header handleTemaClick={handleTemaClick} />
      <Main />

      <Footer 
        redsocial={'Twitter'}
      />

      {/* Modal de registro */}
      <div className="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registroModalLabel">Registro</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="formularioReg" className="row g-3" >

              <div className="col-md-6">
                  <label for="inputNombre" className="form-label">Nombres</label>
                  <input type="text" className="form-control" id="inputNombre" required placeholder="Nombres"/>
                </div>
                <div className="col-md-6">
                  <label for="inputApellido" className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="inputApellido" required placeholder="Apellidos"/>
                </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" required placeholder="Email"/>
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Dirección" required/>
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="inputCity" required placeholder="Ciudad"/>
              </div>
              <div className="col-md-4">
                <label for="inputState" className="form-label">Provincia</label>
                <select id="inputState" className="form-select" required>
                  <option selected>Choose...</option>
                  <option>Buenos Aires</option>
                  <option>La Pampa</option>
                  <option>Cordoba</option>
                  <option>San Luis</option>
                  <option>Mendoza</option>
                  <option>Entre Rios</option>
                </select>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label" for="gridCheck">
                    Quiero recibir novedades sobre otros eventos en mi email.
                  </label>
                </div>
              </div>

                <button id="btnRegistro" type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Registrarme</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
