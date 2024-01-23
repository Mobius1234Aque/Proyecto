import { Header } from '../components/Header';
import { Footer } from "../components/Footer";
import { Subtitulo, Titulo } from '../components/Titulos';
import '../css/Inicio.css';

import inicio from '../img/imagenUno.jpg'

import { data } from "../js/data";

export function Home() {
    return (
        <>
            <Header/>
            
            <Titulo tit='Bienvenido'/>
            
   

            <div className="item-tres">

            <div className='item-dos'>
                    <Subtitulo subTit={"Zona 012:"}/>
                    <p>Supervisión Escolar Sistema Indígena Numero 12 de Huazalingo Hidalgo es una unidad económica registrada desde 2014-12 que se dedica a la actividad económica Actividades administrativas de instituciones de bienestar social clasificada por (SCIAN) 931610, con domicilio en , Col. Guillermo Rossell, Huazalingo, Huazalingo, Hidalgo C.P. 43070, . Puedes contactarlos a través de 7711499741, o visitando su sitio web . Toda la información sobre esta empresa se ha obtenido a través de fuentes públicas del gobierno de Huazalingo, Hidalgo México. </p>
                </div>

                <div className="image-container">
                       <img src={inicio} alt="" /> 
                </div>

                <Subtitulo subTit={"Información relevante:"}/>
                <p> Es una unidad económica registrada desde 2014-12 que se dedica a la actividad económica, actividades administrativas de instituciones de bienestar social</p>
            </div>               

            <Footer/>
        </>
    );
}
