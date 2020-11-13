import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./estilos.css"
import ofertas from "./img/Ofertasimg"
class Ofertas extends Component {
    render() {
      return(
        
        <div className="cuido">
                   <div class="p-3 mb-2 bg-dark text-white">Ofertas</div>
          {ofertas.map((items)=>{
              return(
                  <div className="imgcontenedor">
                  <img className="imgproductos" src={items.foto} />
                  <div>
                      <h3>{items.Precio}</h3>
                      </div>
                      <button type="button" class="btn btn-outline-success"><Link to="/pagos">Comprar</Link></button>
                      <div class="dropdown">
                        <div class="dropdown-divider">,</div>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Informacion
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Cepillar previamente el pelo de su mascota.
     Aplicar el Spray CanAmor directamente sobre el pelo del animal a una distancia mínima de 20 centímetros, 
     evitando que caiga en la cara y órganos reproductores.</a>
  </div>
</div>


                  </div>
                  
              );
          })}
          <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Siguiente</a>
    </li>
  </ul>
</nav>
        </div>
      );
    }
  }
  
  export default Ofertas;