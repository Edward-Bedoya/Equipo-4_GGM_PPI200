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
                <button className="btn btn-secondary">Info</button>


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