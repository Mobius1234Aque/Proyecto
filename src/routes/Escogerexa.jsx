import React from 'react';

import { Header } from '../components/Header';

import { Footer } from "../components/Footer";

import { Subtitulo, Titulo } from '../components/Titulos';

import { Button, Flex } from 'antd';

export function Escoger() {

    return(
        <>
        <Header/>
        <Titulo tit={'¿Que tipo de evaluacion deseas crear?'}/>

            <div style={{maxWidth:'100%', width:'1200px', textAlign:'center', display: 'block', margin: 'auto'}}>
            <Button type="primary" ghost style={{backgroundColor:'#00314A', border:'none',color:'white', margin:'15px',fontSize:'20px', paddingBottom:'40px'}}>
                Examen de Opcion multiple
            </Button>
            <Button type="primary" ghost style={{backgroundColor:'#00314A', border:'none',color:'white', margin:'15px', fontSize:'20px', paddingBottom:'40px'}}>
                Examen de respuestas abiertas
            </Button>
            <Button type="primary" ghost style={{backgroundColor:'#00314A', border:'none',color:'white', margin:'15px',fontSize:'20px', paddingBottom:'40px'}}>
                Examen de respuestas abiertas
            </Button>
            </div>
        <Footer/>
        </>
    )
    
}