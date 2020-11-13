import React,{Component} from "react";
import "./estilos.css"
import noticias from "./img/Noticiasimg"
class Noticias extends Component {
    render() {
      return(
        
        <div className="cuido">
          
          {noticias.map((items)=>{
              return(
                  
                  <div className="imgcontenedor">
                    <div class="p-3 mb-2 bg-dark text-white">Noticias</div>
                  <img className="imgproductos" src={items.foto} />
                  
                  <h3>¿Cuidados para tu perro?</h3>
                  <div>
                    
                      <h3>{items.Precio}</h3>
                      </div>
                      
                      <button className="btn btn-primary">Ver</button>
                
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
    </li>
    <a class="page-link" href="#">Siguiente</a>
  </ul>
</nav>

        </div>
        
      );
      
    }
  }
  
  export default Noticias;