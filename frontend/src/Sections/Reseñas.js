import React, { Component } from 'react';
import logo from './img/logo.png'
import corazon from  './img/Cora.png'
import bueno from  './img/gskd.jpg'
import malo from  './img/Malo.png'
class Reseñas extends Component{
	render(){
		return(
			<div>
				<div class="p-3 mb-2 bg-dark text-white">Reseñas</div>
			<div className="contenedorDeReseñas">
				<div>
				</div>
				
				<div className="preguntas">
					<h3>¿Cuidados para tu perro?</h3>
				</div>
				<div className="todoElContenedorReseñas">
				<div className="contenedorUsuario_Reseñas">
					<div className="contenedorPerfil">
						<img src={logo} className="perfil" />
					</div>
					<div>
						JULIANA_G
					</div>
					</div>
					<div className="comentario">
						<p>Un texto es una composición de signos codificados en un 
						sistema de escritura que forma una unidad de sentido. 
						También es una composición de caracteres imprimibles generados 
						por un algoritmo de cifrado que, aunque no tienen sentido 
						para cualquier persona, sí puede ser descifrado por su 
						destinatario original</p>
					</div>	
					<div className="botonesInformacion">
						<button type="button" class="btn btn-primary">Responder</button>
						<div>
							<img src={bueno} className="btnReferencias" />
							<img src={malo} className="btnReferencias" />
							<img src={corazon} className="btnReferencias" />
						</div>
					</div>	
				</div>
				<div className="todoElContenedorReseñas">
				<div className="contenedorUsuario_Reseñas">
					<div className="contenedorPerfil">
						<img src={logo} className="perfil" />
					</div>
					<div>
						Josefo_Nose
					</div>
					</div>
					<div className="comentario">
						<p>Un texto es una composición de signos codificados en un 
						sistema de escritura que forma una unidad de sentido. 
						También es una composición de caracteres imprimibles generados 
						por un algoritmo de cifrado que, aunque no tienen sentido 
						para cualquier persona, sí puede ser descifrado por su 
						destinatario original</p>
					</div>	
					<div className="botonesInformacion">
						<button type="button" class="btn btn-primary">Responder</button>
						<div>
							<img src={bueno} className="btnReferencias" />
							<img src={malo} className="btnReferencias" />
							<img src={corazon} className="btnReferencias" />
						</div>
					</div>	
				</div>
				<div className="todoElContenedorReseñas">
				<div className="contenedorUsuario_Reseñas">
					<div className="contenedorPerfil">
						<img src={logo} className="perfil" />
					</div>
					<div>
						Carlos_alberto
					</div>
					</div>
					<div className="comentario">
						<p>Un texto es una composición de signos codificados en un 
						sistema de escritura que forma una unidad de sentido. 
						También es una composición de caracteres imprimibles generados 
						por un algoritmo de cifrado que, aunque no tienen sentido 
						para cualquier persona, sí puede ser descifrado por su 
						destinatario original</p>
					</div>	
					<div className="botonesInformacion">
						<button type="button" class="btn btn-primary">Responder</button>
						<div>
							<img src={bueno} className="btnReferencias" />
							<img src={malo} className="btnReferencias" />
							<img src={corazon} className="btnReferencias" />
						</div>
					</div>	
				</div>
				<div className="todoElContenedorReseñas">
				<div className="contenedorUsuario_Reseñas">
					<div className="contenedorPerfil">
						<img src={logo} className="perfil" />
					</div>
					<div>
						Mario@69
					</div>
					</div>
					<div className="comentario">
						<p>Un texto es una composición de signos codificados en un 
						sistema de escritura que forma una unidad de sentido. 
						También es una composición de caracteres imprimibles generados 
						por un algoritmo de cifrado que, aunque no tienen sentido 
						para cualquier persona, sí puede ser descifrado por su 
						destinatario original</p>
					</div>	
					<div className="botonesInformacion">
						<button type="button" class="btn btn-primary">Responder</button>
						<div>
							<img src={bueno} className="btnReferencias" />
							<img src={malo} className="btnReferencias" />
							<img src={corazon} className="btnReferencias" />
						</div>
					</div>	
				</div>
			</div>
			<div class="dropdown-divider">,</div><input type="text" placeholder="Hacer una pregunta" className="infoInput" />
			<div class="p-3 mb-2 bg-dark text-white">Alegres Patitas</div>
			</div>
		);
	}
}
export default Reseñas;