import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Home({ carros, eliminar }) {
  const [condicion, setCondicion] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("tipo", data.tipo);
    formData.append("marca", data.marca);
    formData.append("modelo", data.modelo);
    formData.append("año", data.año);
    formData.append("color", data.color);
    formData.append("precio", data.precio);
    formData.append("imagen", data.imagen[0]);

    try {
      const response = await axios.post(
        "https://crud-apis-2024.onrender.com/vehiculos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Vehículo agregado:", response.data);
      closeModal(); // Cierra el modal solo si la solicitud fue exitosa
    } catch (error) {
      console.log("Error al llamar a la API:", error);
    }
  };

  const condicionParaBorrar = () => {
    setCondicion(!condicion);
  };
  const salirModalB = ()=>{
    setCondicion(false);
  }

  let carroShort = carros.slice(0, 6);
  return (
    <div>



      <div className="agregar">
      <div class="flex items-center justify-center p-5">
  <div class="rounded-lg bg-gray-200 p-5 w-full">
    <div class="flex">
      <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
      <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
      <input type="text" class="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="Buscar vehiculos..." id=""/>
      <input type="button" value="Search" class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
    </div>
  </div>
</div>

<h1 className="titulo-navegacion">Aplicacion Crud 2024 !!! Adam</h1>
      {/* button agregar */}
      <button
  onClick={openModal}
  className="px-10 py-3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-600 shadow-blue-600 uppercase font-serif tracking-widest relative overflow-hidden group text-transparent cursor-pointer z-10 after:absolute after:rounded-full after:bg-blue-200 after:h-[85%] after:w-[95%] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:saturate-[1.15] active:saturate-[1.4]"
>
  Button
  <p
    class="absolute z-40 font-semibold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-full h-full w-full transition-all duration-300 -translate-y-[30%] tracking-widest"
    >
    Agregar
  </p>
  <p
    class="absolute z-40 top-1/2 left-1/2 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent -translate-x-1/2 translate-y-full h-full w-full transition-all duration-300 group-hover:-translate-y-[40%] tracking-widest font-extrabold"
    >
    Vehiculos
  </p>
  <svg
    class="absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:animate-none animate-pulse group-hover:-translate-y-[45%] transition-all duration-300"
    viewBox="0 0 2400 800"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sssurf-grad" y2="100%" x2="50%" y1="0%" x1="50%">
        <stop
          offset="0%"
          stop-opacity="1"
          stop-color="hsl(210, 100%, 75%)"
        ></stop>
        <stop
          offset="100%"
          stop-opacity="1"
          stop-color="hsl(211, 50%, 60%)"
        ></stop>
      </linearGradient>
    </defs>
    <g transform="matrix(1,0,0,1,0,-91.0877685546875)" fill="url(#sssurf-grad)">
      <path
        opacity="0.05"
        transform="matrix(1,0,0,1,0,35)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.21"
        transform="matrix(1,0,0,1,0,70)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.37"
        transform="matrix(1,0,0,1,0,105)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.53"
        transform="matrix(1,0,0,1,0,140)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.68"
        transform="matrix(1,0,0,1,0,175)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.84"
        transform="matrix(1,0,0,1,0,210)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="1"
        transform="matrix(1,0,0,1,0,245)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
    </g>
  </svg>
  <svg
    class="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] group-hover:-translate-y-[33%] group-hover:scale-95 transition-all duration-500 z-40 fill-blue-500"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
      d="M0,288L9.2,250.7C18.5,213,37,139,55,133.3C73.8,128,92,192,111,224C129.2,256,148,256,166,256C184.6,256,203,256,222,250.7C240,245,258,235,277,213.3C295.4,192,314,160,332,170.7C350.8,181,369,235,388,229.3C406.2,224,425,160,443,122.7C461.5,85,480,75,498,74.7C516.9,75,535,85,554,101.3C572.3,117,591,139,609,170.7C627.7,203,646,245,665,256C683.1,267,702,245,720,245.3C738.5,245,757,267,775,266.7C793.8,267,812,245,831,234.7C849.2,224,868,224,886,218.7C904.6,213,923,203,942,170.7C960,139,978,85,997,53.3C1015.4,21,1034,11,1052,48C1070.8,85,1089,171,1108,197.3C1126.2,224,1145,192,1163,197.3C1181.5,203,1200,245,1218,224C1236.9,203,1255,117,1274,106.7C1292.3,96,1311,160,1329,170.7C1347.7,181,1366,139,1385,128C1403.1,117,1422,139,1431,149.3L1440,160L1440,320L1430.8,320C1421.5,320,1403,320,1385,320C1366.2,320,1348,320,1329,320C1310.8,320,1292,320,1274,320C1255.4,320,1237,320,1218,320C1200,320,1182,320,1163,320C1144.6,320,1126,320,1108,320C1089.2,320,1071,320,1052,320C1033.8,320,1015,320,997,320C978.5,320,960,320,942,320C923.1,320,905,320,886,320C867.7,320,849,320,831,320C812.3,320,794,320,775,320C756.9,320,738,320,720,320C701.5,320,683,320,665,320C646.2,320,628,320,609,320C590.8,320,572,320,554,320C535.4,320,517,320,498,320C480,320,462,320,443,320C424.6,320,406,320,388,320C369.2,320,351,320,332,320C313.8,320,295,320,277,320C258.5,320,240,320,222,320C203.1,320,185,320,166,320C147.7,320,129,320,111,320C92.3,320,74,320,55,320C36.9,320,18,320,9,320L0,320Z"
      fill-opacity="1"
    ></path>
  </svg>
</button>

      {/* fin btn agregar */}

 
{/* modal borrar */}


      {/* empieza modal formulario */}

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Agregar Vehículo</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Tipo</label>
                <select
                  id="tipo"
                  name="tipo"
                  {...register("tipo", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="Carro">Carro</option>
                  <option value="Moto">Moto</option>
                </select>
                {errors.tipo && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
              <div>
                <label htmlFor="marca" className="block text-sm font-medium text-gray-700">Marca</label>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  placeholder="Agregar Marca"
                  {...register("marca", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.marca && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
              <div>
                <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">Modelo</label>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  placeholder="Agregar Modelo"
                  {...register("modelo", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.modelo && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
              <div>
                <label htmlFor="año" className="block text-sm font-medium text-gray-700">Año</label>
                <input
                  type="number"
                  id="año"
                  name="año"
                  placeholder="Agregar Año"
                  {...register("año", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.año && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
              <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
                <input
                  type="text"
                  id="color"
                  name="color"
                  placeholder="Agregar Color"
                  {...register("color", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.color && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
              <div>
                <label htmlFor="precio" className="block text-sm font-medium text-gray-700">Precio</label>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  placeholder="Agregar Precio"
                  step="0.01"
                  {...register("precio", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.precio && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
              <div>
                <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">Imagen</label>
                <input
                  type="file"
                  id="imagen"
                  name="imagen"
                  {...register("imagen", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.imagen && <span className="text-red-500 text-sm">Este campo es requerido</span>}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Salir
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      </div>

      <div className="contenedorCarros">
     {/* <div className="grafica"> */}

<div class="cards2">
    <div class="card red">
        <p class="tip">Total Vehiculos</p>
        <p class="second-text ">{carros.length}</p>
    </div>
    <div class="card blue">
        <p class="tip">Carros</p>
        <p class="second-text">{ carros.length > 0 ? carros.filter(carro => carro.tipo === 'Carro').length : ''
        }</p>
    </div>
    <div class="card green">
        <p class="tip">Motos</p>
        <p class="second-text">{carros.length > 0 ? carros.filter(moto => moto.tipo === 'Motos').length : ''}</p>
    </div>
</div>
      
     {/* </div> */}
        {/* aqui empieza el map */}

        <div className="carros">
          {carroShort.map((carro) => (
            <div className="cards"  key={carro.id}>
              {/* card nueva*/}

              <div class="card">
                <div class="card-img">
                  <div className="img">

                  <img
                    className="img_map-first"
                    src={` https://crud-apis-2024.onrender.com/${carro?.imagen_url}`}
                    alt={carro.tipo}
                  />
                  </div>
                </div>
                <div class="card-title">{carro.modelo}</div>
                <div class="card-subtitle">
                {carro.marca}
                </div>
                <hr class="card-divider" />
                <div class="card-footer">
                  <div class="card-price">
                    <span>$</span> {carro.precio}
                  </div>
                  <i
                  onClick={condicionParaBorrar}
                    className="bx bx-x  "   //codigo para cursor blok con tailwind  cursor-not-allowed
                    disabled
                  ></i>
                  <Link to={`/detalle/${carro.id}`}>
                    <button class="card-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                        <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                        <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                        <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                      </svg>
                    </button>
                  </Link>
                  {condicion && (

<div className="modalBorrar">
<div class="bg-gray-100 max-w-sm mx-auto rounded shadow-md">
<div class="text-center p-6">
<p class="text-lg font-bold mb-0">
  Estas Seguro Que Quieres Borrar El Vehiculo?
</p>
<p class="text-sm mb-0">
  Si Borras El Vehiculo De Esta Pagina Tambien Se Borrara De La Base De Datos, <span> Tenemos {carros.length} Vehiculos </span> 
</p>
</div>
<div class="border-t border-gray-300 flex justify-center p-0">
<div class="flex-1 text-center">
  <button
  onClick={salirModalB}
    class="text-blue-600 hover:bg-white hover:rounded-bl-md w-full py-2"
    type="button"
  >
    Regresar
  </button>
</div>
<div class="border-l border-gray-300"></div>
<div class="flex-1 text-center">
  <button
   onClick={() => eliminar(carro.id)}
    class="text-red-600 font-bold hover:bg-white hover:rounded-br-md w-full py-2"
    type="button"
  >
    Eliminar
  </button>
</div>
</div>
</div>

</div>
)

}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* table */}

        <div class="w-4/5 mx-auto">
          <table class="min-w-full table-auto bg-white shadow-md rounded-lg">
            <thead>
              <tr class="bg-blue-500 text-white">
                <th class="px-4 py-2 text-left">Tipo</th>
                <th class="px-4 py-2 text-left">Marca</th>
                <th class="px-4 py-2 text-left">Modelo</th>
                <th class="px-4 py-2 text-left">Color</th>
                <th class="px-4 py-2 text-left">Año</th>
              </tr>
            </thead>
            <tbody>
              {carroShort.map((carro) => (
                <tr key={carro.id} class="bg-gray-100">
                  <td class="border px-4 py-2">
                    <p> {carro.tipo}</p>
                  </td>
                  <td class="border px-4 py-2">
                    <p> {carro.marca}</p>
                  </td>
                  <td class="border px-4 py-2">
                    <p> {carro.modelo}</p>
                  </td>
                  <td class="border px-4 py-2">
                    <p> {carro.color}</p>
                  </td>
                  <td class="border px-4 py-2">
                    <p> {carro.año}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
