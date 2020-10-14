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
      
      <nav class="navbar navbar-dark bg-dark">
        <img src={Logo}className="logo"/>
  <a class="navbar-brand" href="#">Alegres Patitas</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Productos <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Ofertas</a>
        <a class="nav-link" href="#">Noticias</a>
        <div class="dropdown mr-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
      Salud
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
    <a class="dropdown-item" href="#">Cuidados</a>
    </div>
   </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mas...
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Iniciar Sesion O Ingresar Con Otra Cuenta</a>
          <a class="dropdown-item" href="#">Reseñas</a>
          <a class="dropdown-item" href="#">Servicios</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Registrarte</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
    );
  }
}

export default Menu;
