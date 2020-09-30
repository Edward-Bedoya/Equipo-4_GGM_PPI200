import React,{Component} from "react";
import "./estilos.css"
import pagos from "./img/Pagosimg"
class Pagos extends Component { render() {
      return(
    <div className="cuido">
                <div class="p-3 mb-2 bg-dark text-white">Metodos De Pago</div>
     {pagos.map((items)=>{
        return(
             <div className="imgcontenedor">
             <img className="imgservicios" src={items.foto} />
             <div>
             <h3>{items.Precio}</h3>
             <p>{items.Descripcion}</p>
                </div>
                <button className="btn btn-primary">35.900</button>
                <button className="btn btn-secondary">Comprar</button>
                

                  </div>
                  
              );
          })}
          <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tarjeta De Credito</h5>
        <p class="card-text">Dispones de dinero inmediato para comprar lo que necesites.</p>
        <a href="#" class="btn btn-primary">Ir</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">PayPal</h5>
        <p class="card-text">Mantener la confianza de nuestros clientes y partners es nuestra prioridad número uno.
         Nuestro compromiso de garantizar pagos seguros en línea es la razón por la cual nuestros clientes eligen PayPal para hacer sus pagos. </p>
        <a href="#" class="btn btn-primary">Ir</a>
      </div>
    </div>
    </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bancolombia</h5>
        <p class="card-text">Todos los días de la semana podrás realizar pagos, transferencias, consultas y conocer nuestros productos y servicios, de una manera fácil y segura. </p>
        <a href="#" class="btn btn-primary">Ir</a>
      </div>
    </div>
    </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">BBVA</h5>
        <p class="card-text">No te preocupes por no tener el tiempo de ir al banco , ahora desde BBVA móvil puedes realizar el pagos. </p>
        <a href="#" class="btn btn-primary">Ir</a>
      </div>
    </div>
  </div>
  <div class="dropdown-divider">,</div>
</div>

          <button type="button" class="btn btn-dark">Pago Por Contra Entrega</button>
        </div>
      );
    }
  }
  
  export default Pagos;