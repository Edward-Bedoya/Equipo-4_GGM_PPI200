import React, {Component} from "react";
import "./estilos.css"
import Logo from "./img/logo.png"

class Menu extends Component {
  render() {
    return(
      // <div>
      //   <header className="contenedorMenu">
      //     <div className="contentJustify">
      //       <img src={Logo} className="logo" />
      //       <p>Alegres Patitas</p>
      //     </div>
      //     <nav className="menu">
      //       <ul>
      //         <li><a href="#">Productos</a></li>
      //         <li><a href="#">Servicios</a></li>
      //         <li><a href="#">Eventos</a></li>
      //         <li><a href="#">Ofertas</a></li>
      //         <li><a href="#">Noticias</a></li>
      //         <li><a href="#">Reseñas</a></li>
      //         <li><a href="#">Iniciar Sesion</a></li>
      //         <li><a href="#">Registrarse</a></li>
      //       </ul>
      //     </nav>
      //   </header>
      // </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img src={Logo}className="logo"/>
  <a class="navbar-brand" href="#">Alegres Patitas</a> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">david <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Menu;
