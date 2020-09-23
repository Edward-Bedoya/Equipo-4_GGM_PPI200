import React, { Component } from 'react';
import './estilos.css';
import logo from "./img/logo.png"
class Registrarse extends Component {
  render() {
    return(
      <div className="padre">
        <form className="formulario">
        <div>
        <img src={logo} className="logoImg"/>
        </div>
        <h3 className="tituloIS">Registro</h3>
          <input type="text" placeholder="Nombre" className="infoInput" />
          <input type="text" placeholder="Apellidos" className="infoInput" />
          <input type="text" placeholder="Usuario" className="infoInput" />
          <input type="text" placeholder="Contraseña" className="infoInput" />
          <input type="text" placeholder="Verificar Contraseña" className="infoInput" />
          <input type="text" placeholder="Correo Electronico" className="infoInput" />
          <div className="elboton">
          <input type="submit" value="Comenzar" className="buttonEnviar" />
          </div>
          <p> O </p>
     <p>Iniciar sin registrarte         
          
            <a href="#">Acceder</a></p>    
        </form>
      </div>
    );
  }
}
export default Registrarse ;