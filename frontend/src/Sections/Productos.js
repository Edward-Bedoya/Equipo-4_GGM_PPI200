import React,{Component} from "react";
import "./estilos.css"
import comida from "./img/Productoimg"
class Productos extends Component {
    render() {
      return(
        <div className="cuido">
          {comida.map((items)=>{
              return(
                  <div className="imgcontenedor">
                  <img className="imgproductos" src={items.foto} />
                  <div>
                      <h3>{items.Precio}</h3>
              <p>{items.Descripcion}</p>
                      </div>
                      <button className="Boton" type="button">Comprar</button>


                  </div>
                  
              );
          })}
        </div>
      );
    }
  }
  
  export default Productos;