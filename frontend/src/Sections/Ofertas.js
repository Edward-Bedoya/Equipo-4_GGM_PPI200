import React,{Component} from "react";
import "./estilos.css"
import ofertas from "./img/Ofertasimg"
class Ofertas extends Component {
    render() {
      return(
        <div className="cuido">
          {ofertas.map((items)=>{
              return(
                  <div className="imgcontenedor">
                  <img className="imgproductos" src={items.foto} />
                  <div>
                      <h3>{items.Precio}</h3>
                      </div>
                      <button className="Boton" type="button">Comprar</button>
                      <button className="Boton" type="button">Info</button>


                  </div>
                  
              );
          })}
        </div>
      );
    }
  }
  
  export default Ofertas;