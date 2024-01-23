// src/components/NotFound.jsx
import React from 'react';
import { ScrollToTop } from '../components/ScrollToTop';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulos';
import './css.css'; // Asegúrate de tener un archivo de estilos para aplicarlos

// Importa la imagen
import OrdenadorImage from '../img/alerta.gif';

const NotFound = () => {
  
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Titulo tit={'Parece que esta página no existe'}/> 
      <div className="imagen-container">
        <img src={OrdenadorImage} alt="" className="imagen-pequena-centrada" />
      </div> <br></br>       
      {/* Agrega cualquier contenido adicional que desees mostrar */}
      <Footer />
    </div>
  );
};

export default NotFound;
