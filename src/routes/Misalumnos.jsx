import React from 'react';

import { Header } from '../components/Header';

import { Link } from "react-router-dom";


import { Footer } from "../components/Footer";

import { Subtitulo, Titulo } from '../components/Titulos';
import { Space, Table, Tag } from 'antd';
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
    title: ' ',
    key: '',
    render: (_, record) => (
      <Space size="middle">
        <a> </a>
      </Space>
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

export function Misalumno() {
    return(
        <>
        <Header/>

            <Titulo tit={'Mi lista de alumnos'}/>
            <div style={{maxWidth:'100%', width:'1000px', textAlign:'center', display: 'block', margin: 'auto'}}>
                <Table style={{width:'850px', display: 'block', margin: 'auto'}} columns={columns} dataSource={data} />
            </div>

        <Footer/>
        </>)
}