
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";
// import './index.css';

import Home from './components/Home'
import Navbar from './components/Navbar'



function App() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios
      .get("https://crud-apis-2024.onrender.com/vehiculos")
      // .get("http://localhost:3000/vehiculos")
      .then((e) => setCarros(e.data))
      .catch((error) => {
        console.log("Error al buscar la API", error);
      });
  }, []);

  console.log(carros);

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home carros={carros}/>} />
        <Route path='/navegacion' element={<Navbar/>} />
  
      </Routes>

    </HashRouter>

    </>
  )
}

export default App
