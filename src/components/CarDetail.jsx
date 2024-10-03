import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CarDetail = () => {
  const { id } = useParams();  // Obtener el ID de la URL
  const [carDetail, setCarDetail] = useState(null);

  // Obtener detalles del vehículo por ID
  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await axios.get(`https://crud-apis-2024.onrender.com/vehiculos/${id}`);
        setCarDetail(response.data);
      } catch (error) {
        console.error("Error al obtener los detalles del vehículo", error);
      }
    };

    fetchCarDetail();
  }, [id]);

  // Mostrar un mensaje de carga hasta que los datos estén disponibles
  if (!carDetail) {
    return <div>Cargando detalles del vehículo...</div>;
  }

  return (
    // <div>
    //   <h2>{carDetail.marca} {carDetail.modelo}</h2>
    //   {/* <img src={carDetail.imagen} alt={carDetail.marca} width="300" /> */}
    //   <img className=" float-animation" src={` https://crud-apis-2024.onrender.com/${carDetail?.imagen_url}`} alt={carDetail.tipo}  />
    //   <p>Año: {carDetail.año}</p>
    //   <p>Color: {carDetail.color}</p>
    //   <p>Precio: ${carDetail.precio}</p>
    // </div>



/* From Uiverse.io by EcheverriaJesus */ 
<div class="flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-800 rounded-lg md:flex-row">
<div class="flex justify-center items-center w-28 h-28 p-5 bg-gradient-to-r from-green-400 to-[#002Ff9] rounded-lg hover:-translate-y-10 duration-700 hover:scale-125">
    <img className=" float-animation logo-svg" src={` https://crud-apis-2024.onrender.com/${carDetail?.imagen_url}`} alt={carDetail.tipo}  />
</div>
<div class="max-w-sm h-auto space-y-3">
  <div class="flex justify-center items-center sm:justify-between">
  <h2 class="text-white text-2xl font-bold tracking-widest" > {carDetail.modelo}</h2>
  <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" class="hidden sm:flex hover:scale-150 duration-300 fill-white cursor-pointer"><path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z"></path></svg>
  </div>
  <p class="text-sm text-gray-200">Este es tu {carDetail.tipo} de sueños, puedes adquirirla con un descuento significativo.</p>
  <div class="flex gap-6 items-center justify-center">
    <p class="text-white font-bold text-lg">${carDetail.precio}</p>
    {/* <p class="text-gray-300 font-semibold text-sm line-through">${carDetail.precio - 1000}</p> */}
  </div>
  <div class="flex justify-around items-center my-2">
    <button class="px-2 bg-blue-600 p-1 rounded-md text-white font-semibold shadow-xl shadow-blue-500/50 hover:ring-2 ring-blue-400 hover:scale-75 duration-500">Buy Now</button>
    <button class="px-2 border-2 border-white p-1 rounded-md text-white font-semibold shadow-lg shadow-white hover:scale-75 duration-500">Add to Cart</button>
  </div>
</div>
</div>
  );
};

export default CarDetail;
