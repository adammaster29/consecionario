import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import CarDetail from './components/CarDetail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios
      .get('https://crud-apis-2024.onrender.com/vehiculos')
      .then((e) => setCarros(e.data))
      .catch((error) => {
        console.log('Error al buscar la API', error);
      });
  }, []);

  // Función para eliminar un carro por ID
  const eliminar = async (id) => {
    try {
      await axios.delete(`https://crud-apis-2024.onrender.com/vehiculos/${id}`);
      const updatedCarros = carros.filter((car) => car.id !== id);
      setCarros(updatedCarros);
      console.log(`Carro con ID ${id} eliminado correctamente.`);
    } catch (error) {
      console.error('Error al eliminar el carro:', error);
    }
  };

console.log(carros);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home eliminar={eliminar} carros={carros} />} />
          <Route path='/navegacion' element={<Navbar />} />
          <Route path='/carrusel' element={<Carrusel />} />
          <Route path="/detalle/:id" element={<CarDetail />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
