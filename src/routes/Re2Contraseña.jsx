import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Form, Input, Button, Select, message } from 'antd';
import { ScrollToTop } from '../components/ScrollToTop';
import { QuestionCircleOutlined, IdcardOutlined } from '@ant-design/icons';
import { Subtitulo, Contenido } from '../components/Titulos';
 
const { Option } = Select;

export function Re2Contraseña() {
    const navigate = useNavigate();
    const [tipoRecuperacion, setTipoRecuperacion] = useState(null);

    const onFinish = (values) => {
        // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
        console.log('Received values:', values);

        // Si todo está bien, redirige al usuario a la ruta deseada
        navigate('/'); // Reemplaza '/nueva-ruta' con la ruta a la que deseas redirigir
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // Muestra un mensaje de error al usuario 
        message.error(<Contenido conTit={'Por favor, completa todos los campos.'} />);
    };

    const handleRecuperacionChange = (value) => {
        setTipoRecuperacion(value);
    };

    return (
        <>
            <Header />
            <div className="Simon">
                <ScrollToTop />
                <div className="login-box">
                    <Subtitulo subTit={'Recuperación de contraseña'} />
                    <Contenido conTit={'Paso 2/2: Datos de usuario'} /><br></br>

                    

                    <Form
                        name="loginForm"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>

                        <Contenido conTit={'Nombre del usuario: REYNA DE LOS ANGELES VITE VERA'} /><br />

                        <Contenido conTit={'Tipo de recuperación:'} />
                        <Form.Item
                            name="tipoRecuperacion"
                            rules={[{ required: true, message: <Contenido conTit={'Por favor, selecciona un tipo de recuperación'} /> }]}>
                            <Select
                                placeholder={<Contenido conTit={'Seleccione un tipo de recuperación'} />}
                                suffixIcon={<IdcardOutlined />}
                                onChange={handleRecuperacionChange}>
                                <Option value="correo"><Contenido conTit={'Correo electrónico'} />  </Option>
                                <Option value="pregunta"><Contenido conTit={'Pregunta secreta'} />  </Option>
                            </Select>
                        </Form.Item>

                         
                        {tipoRecuperacion === 'pregunta' && (
    <>
        <Contenido conTit={'Pregunta secreta:'} />
        {/* Agrega aquí el campo de entrada para la respuesta */}
        <Form.Item
            name="respuesta"
            rules={[
                {
                    required: true,
                    message: <Contenido conTit={'Por favor, ingresa la respuesta'} />,
                },
                {
                    pattern: /^[a-zA-Z0-9\s]+$/,
                    message: <Contenido conTit={'La respuesta solo puede contener letras, números y espacios'} />,
                },
            ]}>
            <Input
                prefix={<QuestionCircleOutlined />}
                placeholder="Respuesta"
                
            />

        </Form.Item>
    </>
)}


                         {/* Botón de regreso */}
                    <Link to="/ReContraseña">
                        <Button type="primary" style={{ marginBottom: '16px' }}>
                            Atrás
                        </Button>
                    </Link>

                        {/* Botón de envío */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Enviar
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}
