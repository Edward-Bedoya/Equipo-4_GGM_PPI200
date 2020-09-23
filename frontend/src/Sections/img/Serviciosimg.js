import React, {Component} from "react";
import Peluqueria from "./Pelu.jpg";
import Veter from "./Veter0.jpg";
import Escuela from "./Escu.jpg";


export const Servicios = [
 
  {
    foto: Peluqueria,
    Descripcion: "Sin duda este lujo se lo merecen todas las mascotas, incluso es algo que los beneficia para su salud",
    Precio: "Peluquerias"},
  
    {
        foto: Veter,
        Descripcion: "Además de cuidar su salud le das una gran vida y siempre será así si cuidas de tu mascota.",
        Precio: "Veterinarias"}, 

        {
            foto: Escuela,
            Descripcion: "ave textura tan fácil de masticar, Whiskas® Sticks es el premio perfecto para mimar a tu gato entre comidas. Elaboradas con pollo y un alto contenido en carne",
            Precio: "Escuelas y otros"} 
];
export default Servicios;