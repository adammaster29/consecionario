import React from "react";
import Navbar from "./Navbar";
import Carrusel from "./Carrusel.jsx";
import { Link } from "react-router-dom";

function Home({ carros, eliminar }) {
  let carroShort = carros.slice(0, 6);
  let vehiculos = carros.slice(5, 10);
  let vehiculos2 = carros.slice(2, 7);
  return (
    <div>
      <Navbar />
      <div className="contenedorCarrusel">
      <Carrusel />
      </div>
      <div className="contenedorCarros">
        {/* aqui empieza el map */}
        <div className="carros">
          {carroShort.map((carro) => (
            <div className="cards" key={carro.id}>
              <img className="img_map-first"
                src={` https://crud-apis-2024.onrender.com/${carro?.imagen_url}`}
                alt={carro.tipo}
              />
              <div className="contenedor-descripcion">
                <div className="descripcion-vehiculo bg-cyan-600	z-index: 0;  text-gray-100">
                  <p>Marca: {carro.marca}</p>
                  <p>Modelo: {carro.modelo}</p>
                  <p>Año: {carro.año}</p>
                  <p>Color: {carro.color}</p>
                  <p>Precio: {carro.precio}</p>
                </div>
              </div>

              <div className="sombraDescripcion">
                <div className="carrosInhover">
                  <img
                    className=" float-animation"
                    src={` https://crud-apis-2024.onrender.com/${carro?.imagen_url}`}
                    alt={carro.tipo}
                  />
                  <p> {carro.modelo}</p>
                  <p>
                    <span className="text-green-600">$</span> {carro.precio}{" "}
                    Dollars
                  </p>
                </div>
                <div className="contenedorIcon  ">
                  <i onClick={() => eliminar(carro.id)} className="bx bx-x"></i>
                  <Link to={`/detalle/${carro.id}`}>Ver Detalle</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* contenedor 1 */}
        <div className="carrosDescripcionesDownCards">
          <img
            className="img-uno_carrosDescripcion"
            src={`https://crud-apis-2024.onrender.com/${carros[7]?.imagen_url}`}
            alt=""
          />
          <img
            className="img-dos_carrosDescripcion"
            src={`https://crud-apis-2024.onrender.com/${carros[1]?.imagen_url}`}
            alt=""
          />
        </div>
         {/* contenedor 2 */}

      <div className="contenedor2">
        <div className="card_contenedor2 ducati-contenedor2">
          <img
            className="img_contenedor2"
            src={`https://crud-apis-2024.onrender.com/${carros[3]?.imagen_url}`}
            alt=""
          />
          <p>{carros[3]?.modelo}</p>
        </div>
        <div className="card_contenedor2 tarjetas-card2">
          {vehiculos.map(vehiculo => (
            <div className="tarjeta">
               <img
                src={` https://crud-apis-2024.onrender.com/${vehiculo?.imagen_url}`}
                alt={vehiculo.tipo}
              />
               <div>
               <p>Marca: {vehiculo.marca}</p>
                  <p>Modelo: {vehiculo.modelo}</p>
                  <p>Año: {vehiculo.año}</p>
                  <p>Color: {vehiculo.color}</p>
                  <p>Precio: {vehiculo.precio}</p>
               </div>
            </div>
          ))

          }
        </div>
      </div>
       {/* contenedor 3 */}

       <div className="contenedor2">
        <div className="card_contenedor2 ducati-contenedor2">
          <img
            className="img_contenedor2"
            src={`https://crud-apis-2024.onrender.com/${carros[0]?.imagen_url}`}
            alt=""
          />
          <p>{carros[0]?.modelo}</p>
        </div>
        <div className="card_contenedor2 tarjetas-card2">
          {vehiculos2.map(vehiculo => (
            <div className="tarjeta">
               <img
                src={` https://crud-apis-2024.onrender.com/${vehiculo?.imagen_url}`}
                alt={vehiculo.tipo}
              />
               <div>
               <p>Marca: {vehiculo.marca}</p>
                  <p>Modelo: {vehiculo.modelo}</p>
                  <p>Año: {vehiculo.año}</p>
                  <p>Color: {vehiculo.color}</p>
                  <p>Precio: {vehiculo.precio}</p>
               </div>
            </div>
          ))

          }
        </div>
      </div>
      {/* contenedor 4  */}

      <div className="contenedorCardsSmall">
        {carros.map(carrosCardsSmall =>(
          <div key={carrosCardsSmall.id} className="cardSmall">
            
          <div className="img_small">
             <img 
                src={` https://crud-apis-2024.onrender.com/${carrosCardsSmall?.imagen_url}`}
                alt={carrosCardsSmall.tipo}
                />

          </div>
                  <p>{carrosCardsSmall.modelo}</p>
          </div>

        ))}
      </div>

      </div>
      <div  className="footer">
        <div className="inicioFooter">
          <div className="buy"> 
           <div className="contenedorBuy">
            <img src="/img/payment.svg" alt="" />
            <h2>Paga con tarjeta o en efectivo</h2>
            <p>Con  MasterCards, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</p>
           </div>

             </div>
          <div className="buy">
          <div className="contenedorBuy">            
            <img src="/img/shipping.svg" alt="" />
            <h2>Envío gratis desde $ 60.000</h2>
            <p>Con solo estar registrado en carros add, tienes envíos gratis en miles de productos seleccionados.</p>
            </div>
            </div>
          <div className="buy">
          <div className="contenedorBuy">         
            <img src="/img/protected.svg" alt="" />
            <h2>Seguridad, de principio a fin</h2>
            <p>¿No te gusta? ¡Devuélvelo! En carros add, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
            </div>
            </div>
        </div>
        <div id="contactos"  className="finFooter">
        <i className='bx bxl-whatsapp bx-rotate-270 bx-tada text-green-600'  ></i>
        <i className='bx bxl-github bx-tada bx-flip-horizontal ' ></i>
          <p > Copyright: Ing Adalberto Agudelo Herrera</p>
          <i className='bx bxl-gmail bx-tada bx-rotate-90 text-red-600'   ></i>
          <i className='bx bxl-twitter bx-rotate-90 bx-tada text-blue-600'  ></i>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
