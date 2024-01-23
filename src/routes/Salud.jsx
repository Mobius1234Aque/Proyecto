import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Titulo } from '../components/Titulos';
import { GiHealthNormal } from 'react-icons/gi';
import { Space, Table, Tag, Button } from 'antd';
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
    title: 'Datos médicos del alumno',
    key: 'action',
    render: (_, record) => (
      <Button size="middle">
        <Link to={'/Historial'}>Comenzar</Link>
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

export function Salud() {
  const playAudio = (text) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  const handleMouseOver = (text) => {
    playAudio(text);
  };

  const handleMouseOut = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <>
      <Header />
      <Titulo tit={'Salud'} icono={<GiHealthNormal />} />
      <div style={{ maxWidth: '100%', width: '1000px', textAlign: 'center', display: 'block', margin: 'auto' }}>
        <Table
          style={{ width: '850px', display: 'block', margin: 'auto' }}
          columns={columns.map((column) => ({
            ...column,
            onCell: (record) => ({
              onMouseOver: () => handleMouseOver(record[column.dataIndex]),
              onMouseOut: handleMouseOut,
            }),
          }))}
          dataSource={data}
        />
      </div>
      <Footer />
    </>
  );
}