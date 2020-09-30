import React,{Component} from "react";
import "./estilos.css"
import eventos from "./img/Eventosimg"
class Ajustes extends Component {
    render() {
      return(
        <div className="padre">
        <form className="formulario">
        <div>
        <div class="p-3 mb-2 bg-dark text-white">Ajustes</div>
        <div class="dropdown-divider">,</div>
        </div>
        <button type="button" class="btn btn-primary">Regresar</button>  
        <div class="dropdown-divider">,</div>
          <p>Si se aplican los buenos cuidados en la alimentación de la mascota tendría una mejor calidad de vida y una salud estable.</p>
          <button type="button" class="btn btn-dark">Descargar</button>
          <div class="dropdown-divider">,</div>
          <button type="button" class="btn btn-dark">Idioma De Entrada</button>
          <div class="dropdown-divider">,</div>
          <button type="button" class="btn btn-dark">Seguridad</button>
          <div class="dropdown-divider">,</div>
          <div className="elboton">
          <div class="dropdown">
              
          <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Siguenos En :
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Facebook</a>
    <a class="dropdown-item" href="#">Instagram</a>
    <a class="dropdown-item" href="#">Twitter</a>
    <a class="dropdown-item" href="#">Pinterest</a>
    
  </div>
</div>
          <p>Tel: 316476563</p>
          <button type="button" class="btn btn-outline-success">Salir</button>
          </div>
          
          </div>
          <p><a href="#">AlegresPatitas.com.co</a></p>
        </form>
      </div>
    );
  }
}
export default Ajustes;