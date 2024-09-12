import React from "react";
import Navbar from "./Navbar";
function Home({ carros }) {
  return (
    <div>
      <Navbar />
      <div className="contenedorCarros">
        <div className="carros__menores">
          <img
            className="img_vehiculos-variado float-animation"
            src={` https://crud-apis-2024.onrender.com/${carros[1]?.imagen_url}`}
            alt={carros.tipo}
          />

          <img
            className="img_vehiculos-variado float-animation"
            src={` https://crud-apis-2024.onrender.com/${carros[10]?.imagen_url}`}
            alt={carros.tipo}
          />
          <img
            className="img_vehiculos-variado float-animation"
            src={` https://crud-apis-2024.onrender.com/${carros[7]?.imagen_url}`}
            alt={carros.tipo}
          />
          <img
            className="img_vehiculos-variado float-animation"
            src={` https://crud-apis-2024.onrender.com/${carros[15]?.imagen_url}`}
            alt={carros.tipo}
          />
          <img
            className="img_vehiculos-variado float-animation"
            src={` https://crud-apis-2024.onrender.com/${carros[13]?.imagen_url}`}
            alt={carros.tipo}
          />
        </div>
        {/* aqui empieza el map */}
        <div className="carros">
          {carros.map((carro, index) => (
            <div className="cards" key={index}>
              <img
                src={` https://crud-apis-2024.onrender.com/${carro?.imagen_url}`}
                alt={carro.tipo}
              />
              {/*         
              <img
  src={`http://localhost:3000/images/${carro.tipo.toLowerCase()}/${carro.imagen_url}`}
  alt={carro.tipo}
/>
 */}

              <div className="contenedor-descripcion">
                <div className="descripcion-vehiculo 	z-index: 0;  text-gray-100">
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
                    <span className="text-green-600">$</span> {carro.precio} Dollars
                  </p>
                </div>
                <div className="contenedorIcon  ">
                  <i className="bx bx-edit-alt"></i>
                  <i className="bx bx-x"></i>
                  <i className="bx bx-cart-add"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
