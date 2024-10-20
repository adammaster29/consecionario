import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CarDetail = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const [carDetail, setCarDetail] = useState(null);
  const navigate = useNavigate()
   function home(){
    navigate('/')
   }
const alerta = ()=>{
    alert('esta funcion no esta disponible')
}

   

  // Obtener detalles del vehículo por ID
  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await axios.get(
          `https://crud-apis-2024.onrender.com/vehiculos/${id}`
        );
        setCarDetail(response.data);
      } catch (error) {
        console.error("Error al obtener los detalles del vehículo", error);
      }
    };

    fetchCarDetail();
  }, [id]);

  // Mostrar un mensaje de carga hasta que los datos estén disponibles
  if (!carDetail) {
    return  <div class="flex-col gap-4 w-full flex items-center justify-center cargaDetalles">
      <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" class="animate-ping">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
        </svg>
      </div>
    </div>
  }

  return (
    /* From Uiverse.io by EcheverriaJesus */
    <div className="padre_datails">

   
    <div class="flex flex-col card-datils justify-center items-center  gap-5 p-5 bg-gray-800 rounded-lg md:flex-row">
      <div class="flex justify-center items-center w-auto h-auto p-5 bg-gradient-to-r from-green-400 to-[#002Ff9] rounded-lg hover:-translate-y-10 duration-700 hover:scale-125">
        <img
          className=" float-animation "
          src={` https://crud-apis-2024.onrender.com/${carDetail?.imagen_url}`}
          alt={carDetail.tipo}
        />
      </div>
      <div class="max-w-sm h-auto space-y-3">
        <div class="flex justify-center items-center sm:justify-between">
          <h2 class="text-white text-2xl font-bold tracking-widest">
            {" "}
            {carDetail.modelo}
          </h2>
          <svg
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            class="hidden sm:flex hover:scale-150 duration-300 fill-white cursor-pointer"
          >
            <path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z"></path>
          </svg>
        </div>
        <p class="text-sm text-gray-200">
          Este es tu {carDetail.tipo} de sueños, puedes adquirirla con un
          descuento significativo.
        </p>
        <div class="flex gap-6 items-center justify-center">
          <p class="text-white font-bold text-lg"> ${carDetail.precio -1500.22}</p>
          <p class="text-gray-300 font-semibold text-sm line-through">
            ${carDetail.precio}
          </p>
        </div>
        <div class="flex justify-around items-center my-2">
          <button onClick={alerta} class="px-2 bg-blue-600 p-1 rounded-md text-white font-semibold shadow-xl shadow-blue-500/50 hover:ring-2 ring-blue-400 hover:scale-75 duration-500">
            Comprar Ahora
          </button>
          <button onClick={home} class="px-2 border-2 border-white p-1 rounded-md text-white font-semibold shadow-lg shadow-white hover:scale-75 duration-500">
            Regresar
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CarDetail;
