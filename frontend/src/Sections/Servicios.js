import React,{Component} from "react";
import "./estilos.css"
import servicios from "./img/Serviciosimg"
class Servicios extends Component { render() {
      return(
    <div className="cuido">
     {servicios.map((items)=>{
        return(
             <div className="imgcontenedor">
             <img className="imgservicios" src={items.foto} />
             <div>
             <h3>{items.Precio}</h3>
             <p>{items.Descripcion}</p>
                </div>
                <button className="Boton" type="button">Ir</button>
                 <button className="Boton" type="button">Info</button>


                  </div>
                  
              );
          })}
        </div>
      );
    }
  }
  
  export default Servicios;