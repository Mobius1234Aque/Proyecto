import React from 'react';

import { Header } from '../components/Header';

import { Footer } from "../components/Footer";

import { Subtitulo, Titulo } from '../components/Titulos';

import url from '../img/imagenDos.jpg'

import '../css/Quien.css'


export function Quien() {
    return(
        <>
            <Header/>
                <Titulo tit={'¿Quiénes Somos?'}/>
                    <div className="quienCon">

                        <div className="quien-element">
                            <img src={url} alt="" />
                        </div>

                        <div className="quien-element">
                            <Subtitulo subTit={'Nuestra Misión'}/>
                            <p>
                            Nuestra misión en la Zona Escolar de Escuelas Primarias Indígenas es proporcionar una educación de calidad que sea accesible, inclusiva y equitativa para todos los niños de nuestras comunidades indígenas. Nos esforzamos por preservar y promover la rica diversidad cultural y lingüística de nuestras comunidades a través de un currículo que refleje sus valores y tradiciones únicas. Estamos comprometidos a fomentar un ambiente de aprendizaje seguro, respetuoso y acogedor que permita a cada estudiante alcanzar su máximo potencial.
                            </p>
                        </div>
                    </div>
            <Footer/>
        </>
    )
    
}