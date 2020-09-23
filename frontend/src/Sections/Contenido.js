import React, { Component } from "react";
import "./estilos.css";
import imagenes from "./img/mapeadoImagenes";

class Contenido extends Component {
  render() {
    return(
      <div>
      <div className="parrafos">
        <p>Es un proyecto en el cual los dueños de las mascotas, tendrán información de los productos y las mascotas 
          que tiene como objetivo informarle al cliente sobre el cuidado adecuado de una mascota como “ Proplan ” 
          esto nos permite saber si tu mascota tiene un a buena alimentacion y si tiene algún problema a diferencia 
          de la rutina que tu haces con tu mascota, esta le brinda mayor salud, nuestro producto le explica de manera 
          detallada el cuidado de tu mascota y que pasos debes seguir en caso de cualquier problema que se presente,
           el usuario tendrá a la mano la solución y podrá solucionarlo.</p>




        <p>Nuestra idea surge a partir de la problemática que tienen los usuarios para solicitar alimentos para las mascotas
           ya que algunos no tienen conocimiento de lo que les ayuda para una buena alimentación
            y un buen desarrollo nutricional para las mascotas.</p>





        <p>En Colombia la mala alimentación de las mascotas es del 30% según (bekiamascotas), al igual que ocurre con los humanos, 
          las mascotas deben seguir una alimentación sana y equilibrada para que su organismo tenga todos los nutrientes 
          necesarios para así evitar enfermedades u otro tipo de dolencias. 
          Las causas son muy diversas hay de distintos tipos, como en lo económico,
           en lo personal y más que todo en el cuidado que se le debe de dar a la mascota.</p>
        </div>
        <div className="imagenesContenedor">
          {imagenes.map((item, i) => {
            return(
              <div className="formaimagenes">
                <img src={item.foto} className="albumImagenes"/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Contenido;
