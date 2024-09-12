import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Importa axios para hacer peticiones HTTP

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: true },
  { name: "Carros", href: "#", current: true },
  { name: "Motos", href: "#", current: true },
  { name: "Agregar +", action: "openModal", current: true }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);


  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('tipo', data.tipo);
    formData.append('marca', data.marca);
    formData.append('modelo', data.modelo);
    formData.append('año', data.año);
    formData.append('color', data.color);
    formData.append('precio', data.precio);
    formData.append('imagen', data.imagen[0]);
  
    try {
      const response = await axios.post(' https://crud-apis-2024.onrender.com/vehiculos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Vehículo agregado:', response.data);
      closeModal(); // Cierra el modal solo si la solicitud fue exitosa
    } catch (error) {
      console.log('Error al llamado de la API:', error);
    }
  };

  return (
    <>
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
                  <option value="Moto">Motos</option>
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
      <Disclosure as="nav" className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Abrir menú principal</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={item.action === "openModal" ? openModal : undefined}
                      className={classNames(
                        item.current
                          ? "bg-blue-100 text-blue-800"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
}