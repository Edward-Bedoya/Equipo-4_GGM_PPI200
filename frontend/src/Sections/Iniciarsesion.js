import React, { Component } from 'react';
import './estilos.css';
import logo from "./img/logo.png"
class Iniciarsesion extends Component {
  render() {
    return(
      <div className="padre">
        <form className="formulario">
        <div>
        <img src={logo} className="logoImg"/>
        </div>
        <h3 className="tituloIS">Iniciar Sesion</h3>
          <input type="text" placeholder="Usuario o Email" className="infoInput" />
          <input type="text" placeholder="Contraseña" className="infoInput" />
          <div className="elboton">
          <button type="button" class="btn btn-dark">Entrar</button>
          
          </div>
          <p> O </p>
          <p>Si no tienes una cuenta <a href="#"> Click aquí para Registrarse</a></p>
        </form>
      </div>
    );
  }
}
export default Iniciarsesion;