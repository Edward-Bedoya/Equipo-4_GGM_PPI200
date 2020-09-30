import React,{Component} from "react";
import "./estilos.css"
import comida from "./img/Saludimg"
class Salud extends Component {
    render() {
      return(
        <div className="cuido">
          <a class="btn btn-primary" href="#" role="button">Consejos En Casa</a>
          <div class="dropdown-divider">,</div>
          {comida.map((items)=>{
              return(
                  <div className="imgcontenedor">
                     <div class="p-3 mb-2 bg-dark text-white">Salud</div>
                  <img className="imgproductos" src={items.foto} />
                  <div>
                      <h3>{items.Precio}</h3>
              <p>{items.Descripcion}</p>
                      </div>
                      <button type="button" class="btn btn-dark">Ver</button>

                      <p> Alegres Patitas

            <a href="#"></a></p>
            
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
  
  export default Salud;