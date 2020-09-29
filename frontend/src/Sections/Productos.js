import React,{Component} from "react";
import "./estilos.css"
import comida from "./img/Productoimg"
class Productos extends Component {
    render() {
      return(
        <div className="cuido">
          <h2>Productos</h2>
          {comida.map((items)=>{
              return(
                  <div className="imgcontenedor">
                  <img className="imgproductos" src={items.foto} />
                  <div>
                      <h3>{items.Precio}</h3>
              <p>{items.Descripcion}</p>
                      </div>
                      <button type="button" class="btn btn-dark">Comprar</button>


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
    <li class="page-item">
      <a class="page-link" href="#">Siguiente</a>
    </li>
  </ul>
</nav>
        </div>
      );
    }
  }
  
  export default Productos;