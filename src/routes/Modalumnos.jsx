import React from 'react';

import { Header } from '../components/Header';

import { Footer } from "../components/Footer";

import { Subtitulo, Titulo } from '../components/Titulos';

import url from '../img/imagenDos.jpg'

import { GiHealthNormal } from "react-icons/gi";

import '../css/Quien.css'

import { Space, Table, Tag, Button} from 'antd';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Edad',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address',
  },
  
  {
    title: 'Acciones ',
    key: 'action',
    render: (_, record) => (
      <Button size="middle">
        <Link to={'/'}>Editar</Link>
      </Button>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Reyna De Los Angeles Vite Vera',
    age: 12,
    address: 'Xocotitla Huejutla Hgo',
  },
  {
    key: '2',
    name: 'Jesus Antonio Ramírez Hernández',
    age: 12,
    address: 'Santa María Tlanchinol Hgo',
  },
];

export function ModA() {
    return(
        <>
            <Header/>
                <Titulo tit={'Modificar mi lista de alumnos '}/>
            <div style={{maxWidth:'100%', width:'1000px', textAlign:'center', display: 'block', margin: 'auto'}}>
                <Table style={{width:'850px', display: 'block', margin: 'auto'}} columns={columns} dataSource={data} />
            </div>
            <Footer/>
        </>
    )
    
}