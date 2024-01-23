import '../css/Login.css';
import { useNavigate } from "react-router-dom";  // Importa useNavigate desde react-router-dom
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../components/Header';
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { ScrollToTop } from '../components/ScrollToTop';
import { Form, Input, Button, Select, message } from 'antd';
import { CheckCircleOutlined, LockOutlined, IdcardOutlined } from '@ant-design/icons';
import { Subtitulo, Contenido } from '../components/Titulos';
 
const { Option } = Select;

export function Login() {
    const navigate = useNavigate();  // Utiliza useNavigate para obtener la función navigate

    const [plantelOptions, setPlantelOptions] = useState([]);
    const [sesionOptions, setSesionOptions] = useState([]);

    const obtenerValoresPlantel = async () => {
        try {
            const response = await axios.get('http://localhost:3000/plantel');
            console.log('Datos del plantel:', response.data);
            setPlantelOptions(response.data);
        } catch (error) {
            console.error('Error al obtener valores del plantel:', error);
        }
    };

    const obtenerValoresSesion = async () => {
        try {
            const response = await axios.get('http://localhost:3000/sesiones');
            console.log('Datos de sesiones:', response.data);
            setSesionOptions(response.data);
        } catch (error) {
            console.error('Error al obtener valores de sesiones:', error);
        }
    };

    useEffect(() => {
        obtenerValoresPlantel();
    }, []);

    useEffect(() => {
        obtenerValoresSesion();
    }, []);

    const onFinish = async (values) => {
        try {
            console.log('Datos de inicio de sesión enviados al backend:', values);
    
            const response = await axios.post('http://localhost:3000/login', {
                curp: values.curp,
                plantel: values.plantel,
                sesion: values.sesion,
                contrasena: values.contrasena
            });
    
            console.log('Respuesta del backend:', response.data);
    
            if (response.data.success) {
                console.log('Inicio de sesión exitoso');
                message.success('Inicio de sesión exitoso');
                navigate('/Preguntas');
                return;
            } else {
                console.log('Inicio de sesión fallido:', response.data.message || 'Credenciales incorrectas');
                message.error(response.data.message || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            message.error('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Por favor, completa todos los campos.');
    };

    return (
        <>
            <Header />
            <div className='Simon'>
                <ScrollToTop />
                <div className="login-box">
                    <Subtitulo subTit={"Inicio de sesión"} />
                    <Form
                        name="loginForm"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>

                        <Contenido conTit={"Curp:"} />
                        <Form.Item
                            name="curp"
                            rules={[
                                {
                                    validator: async (_, value) => {
                                        if (!value || typeof value !== 'string') {
                                            throw new Error('Por favor, ingresa su CURP');
                                        }
                                        const trimmedValue = value.trim();
                                        if (/[a-z]/.test(trimmedValue)) {
                                            throw new Error('La CURP solo debe contener mayúsculas');
                                        }
                                        const uppercasedValue = trimmedValue.toUpperCase();
                                        const pattern = /^[A-Z\d]{4}\d{6}[HM]{1}[A-Z\d]{5}[0-9A-Z]{2}$/;
                                        if (uppercasedValue.length !== 18) {
                                            throw new Error('La CURP debe tener 18 letras mayúsculas/números)');
                                        }
                                        if (!pattern.test(uppercasedValue)) {
                                            throw new Error('La CURP no es válida');
                                        }
                                        if (value !== trimmedValue) {
                                            throw new Error('La CURP no debe contener espacios al inicio, en medio o al final');
                                        }
                                    },
                                },
                            ]}
                        >
                            <Input
                                prefix={<CheckCircleOutlined />}
                                placeholder="Ingrese su CURP"
                            />
                        </Form.Item>

                        <Contenido conTit={"Plantel de trabajo:"} />
                        <Form.Item name="plantel" rules={[{ required: true, message: 'Por favor, selecciona su plantel de trabajo' }]}>
                            <Select placeholder="Seleccione su plantel de trabajo" suffixIcon={<IdcardOutlined />}>
                                {plantelOptions.map(option => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Contenido conTit={"Sesión:"} />
                        <Form.Item
                            name="sesion"
                            rules={[{ required: true, message: 'Por favor, seleccione su tipo de sesión' }]}>
                            <Select
                                placeholder="Seleccione su tipo de sesión"
                                suffixIcon={<IdcardOutlined />}>
                                {sesionOptions.map(option => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Contenido conTit={"Contraseña:"} />
                        <Form.Item
                            name="contrasena"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, ingresa su contraseña'
                                }
                            ]}>
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Contraseña" />
                        </Form.Item>

                        {/* Enlace "¿Olvidaste tu contraseña?" */}
                        <Link to="/ReContraseña"><Contenido conTit={"¿Olvidó su contraseña?"} /> </Link>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Ingresar
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}
