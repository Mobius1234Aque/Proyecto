import '../css/Login.css';
import { Header } from '../components/Header';
import { Footer } from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, message } from 'antd';
import { ScrollToTop } from '../components/ScrollToTop';
import { UserOutlined, LockOutlined, IdcardOutlined } from '@ant-design/icons';
import { Subtitulo, Titulo, Contenido } from '../components/Titulos';
const { Option } = Select;


export function ReContraseña() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
        console.log('Received values:', values);

        // Si todo está bien, redirige al usuario a la ruta deseada
        navigate('/Re2Contraseña'); // Reemplaza '/nueva-ruta' con la ruta a la que deseas redirigir
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // Muestra un mensaje de error al usuario 
        message.error(<Contenido conTit={"Por favor, completa todos los campos."} />);
    };

    return (
        <>
            <Header />
            <div className='Simon'>
                <ScrollToTop />
                <div className="login-box">
                    <Subtitulo subTit={"Recuperación de contraseña"} />
                    <Contenido conTit={"Paso 1/2: Autentificación"} /><br></br>


                    <Form
                        name="loginForm"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>

                        <Contenido conTit={"Plantel de trabajo:"} />
                        <Form.Item
                            name="plantel"
                            rules={[{ required: true, message: <Contenido conTit={"Por favor, selecciona tu plantel de trabajo"} /> }]}>
                            <Select
                                placeholder={<Contenido conTit={"Seleccione su plantel de trabajo"} />}
                                suffixIcon={<IdcardOutlined />}>
                                <Option value="1"><Contenido conTit={"Dirección Zona 012"} />  </Option>
                                <Option value="2"><Contenido conTit={"Escuela Primaria Bilingüe Benito Juárez"} />  </Option>
                                <Option value="3"><Contenido conTit={"Escuela Primaria Bilingüe Héroe Agustín Melgar "} />  </Option>
                            </Select>
                        </Form.Item>

                        <Contenido conTit={"Sesión:"} />
                        <Form.Item
                            name="sesion"
                            rules={[{ required: true, message: <Contenido conTit={"Por favor, selecciona tu tipo de sesión"} /> }]}>
                            <Select
                                placeholder={<Contenido conTit={"Seleccione su tipo de sesión"} />}
                                suffixIcon={<IdcardOutlined />}>
                                <Option value="1"><Contenido conTit={"Supervisor"} />  </Option>
                                <Option value="2"><Contenido conTit={"Director"} />  </Option>
                                <Option value="3"><Contenido conTit={"Maestro"} />  </Option>
                            </Select>
                        </Form.Item>

                           <Contenido conTit={"Usuario:"} />

                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    validator: async (_, value) => {
                                        if (!value || typeof value !== 'string') {
                                            throw new Error('Por favor, ingresa tu usuario');
                                        }

                                        const trimmedValue = value.trim();
                                        const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/;

                                        if (/\s/.test(value)) {
                                            throw new Error('El nombre de usuario no puede contener espacios');
                                        }

                                        if (trimmedValue.length < 5 || trimmedValue.length > 10) {
                                            throw new Error('La longitud de 5 a 10 letras incluyendo números');
                                        }

                                        if (!pattern.test(trimmedValue)) {
                                            throw new Error('Debe contener al menos una letra y un número');
                                        }
                                    },
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder=" "
                            />
                        </Form.Item>


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
