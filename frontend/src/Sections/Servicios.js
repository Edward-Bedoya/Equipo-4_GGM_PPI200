import React,{Component} from "react";
import "./estilos.css"
import servicios from "./img/Serviciosimg"
class Servicios extends Component { render() {
      return(
    <div className="cuido">
     {servicios.map((items)=>{
        return(
             <div className="imgcontenedor">
               <div class="p-3 mb-2 bg-dark text-white">Servicios</div>
             <img className="imgservicios" src={items.foto} />
             <div>
             <h3>{items.Precio}</h3>
             <p>{items.Descripcion}</p>
                </div>
                <button className="btn btn-primary">Ir</button>
                <button className="btn btn-secondary">Info</button>

                  </div>
                  
              );
          })}
          <button type="button" class="btn btn-dark">Revision En Casa</button>
        </div>
      );
    }
  }
  
  export default Servicios;