import "../css/Login.css";
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import {
  UserOutlined,
  LockOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Subtitulo, Notificacion, Contenido } from "../components/Titulos";
const { Option } = Select;
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Select, message, Alert } from "antd";
import axios from "axios";

export function Registro() {
  const [plantelOptions, setPlantelOptions] = useState([]);
  const [sesionOptions, setSesionOptions] = useState([]);
  const [preguntasSecretasOptions, setPreguntasSecretasOptions] = useState([]);

  const obtenerValoresPlantel = async () => {
    try {
      const response = await axios.get("http://localhost:3000/plantel");
      console.log("Datos del plantel:", response.data);
      setPlantelOptions(response.data);
    } catch (error) {
      console.error("Error al obtener valores del plantel:", error);
    }
  };
  const obtenerValoresSesion = async () => {
    try {
      const response = await axios.get("http://localhost:3000/sesiones");
      console.log("Datos de sesiones:", response.data);
      setSesionOptions(response.data);
    } catch (error) {
      console.error("Error al obtener valores de sesiones:", error);
    }
  };

  // Agrega una nueva función para obtener las opciones de preguntas secretas
  const obtenerValoresPreguntasSecretas = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/preguntas-secretas"
      );
      console.log("Datos de preguntas secretas:", response.data);
      setPreguntasSecretasOptions(response.data);
    } catch (error) {
      console.error("Error al obtener valores de preguntas secretas:", error);
    }
  };

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordsMatchMessage, setPasswordsMatchMessage] = useState("");
  useEffect(() => {
    obtenerValoresPlantel();
  }, []);
  useEffect(() => {
    obtenerValoresSesion();
  }, []);
  useEffect(() => {
    obtenerValoresPreguntasSecretas();
  }, []);

  const hasMinimumLength = (value) => value.length >= 8;
  const hasUpperCase = (value) => /[A-Z]/.test(value);
  const hasLowerCase = (value) => /[a-z]/.test(value);
  const hasNumber = (value) => /\d/.test(value);
  const hasSpecialChar = (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const hasNoSpaces = (value) => !/\s/.test(value);

  const onFinish = async (values) => {
    try {
      const dataToInsert = {
        curp: values.curp,
        plantel: values.plantel,
        sesion: values.sesion,
        nombre: values.nombre,
        aPaterno: values.aPaterno,
        aMaterno: values.aMaterno,
        telefono: values.telefono,
        pregunta: values.pregunta,
        respuesta: values.respuesta,
        contrasena: values.contrasena,
      };

      // Verificar si la CURP ya existe en la base de datos
      const curpExists = await axios.post(
        "http://localhost:3000/verificar-curp",
        { curp: values.curp }
      );

      if (curpExists.data.exists) {
        // Mostrar mensaje de error si la CURP ya existe
        message.error("La CURP ya se encuentra registrada");
      } else {
        // Verificar si el número de teléfono ya existe en la base de datos
        const telefonoExists = await axios.post(
          "http://localhost:3000/verificar-telefono",
          { telefono: values.telefono }
        );
        if (telefonoExists.data.exists) {
          // Mostrar mensaje de error si el teléfono ya existe
          message.error("El número de teléfono ya se encuentra registrado");
        } else {
          // Ambos verificaciones pasaron, realizar la solicitud al servidor para insertar los datos
          const response = await axios.post(
            "http://localhost:3000/insertar-dato",
            dataToInsert
          );
          message.success("Registro exitoso");
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error al insertar datos en la base de datos:", error);
      message.error(
        "Error al realizar el registro. Por favor, inténtalo de nuevo."
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(
      <Contenido conTit={"Por favor, completa todos los campos."} />
    );
  };
  return (
    <>
      <Header />
      <div className="Simon">
        <ScrollToTop />
        <div className="login-box">
          <Subtitulo subTit={"Registro"} />
          <Form
            name="loginForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Contenido conTit={"Curp:"} />
            <Form.Item
              name="curp"
              rules={[
                {
                  validator: async (_, value) => {
                    if (!value || typeof value !== "string") {
                      throw new Error("Por favor, ingresa la CURP");
                    }
                    const trimmedValue = value.trim();
                    if (/[a-z]/.test(trimmedValue)) {
                      throw new Error("La CURP solo debe contener mayúsculas");
                    }
                    const uppercasedValue = trimmedValue.toUpperCase();
                    const pattern = /^[A-Z\d]{4}\d{6}[HM]{1}[A-Z\d]{5}[0-9A-Z]{2}$/;
                    if (uppercasedValue.length !== 18) {
                      throw new Error(
                        "La CURP debe tener 18 letras mayúsculas/números)"
                      );
                    }
                    if (!pattern.test(uppercasedValue)) {
                      throw new Error("La CURP no es válida");
                    }
                    if (value !== trimmedValue) {
                      throw new Error(
                        "La CURP no debe contener espacios al inicio, en medio o al final"
                      );
                    }
                  },
                },
              ]}
            >
              <Input
                prefix={<CheckCircleOutlined />}
                placeholder="Ingrese la CURP del personal a registrar"
              />
            </Form.Item>

            <Contenido conTit={"Plantel de trabajo:"} />
            <Form.Item
              name="plantel"
              rules={[
                {
                  required: true,
                  message:
                    "Por favor, selecciona el plantel de trabajo del personal a registrar",
                },
              ]}
            >
              <Select
                placeholder="Seleccione el plantel de trabajo del personal a registrar"
                suffixIcon={<IdcardOutlined />}
              >
                {plantelOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Contenido conTit={"Sesión:"} />
            <Form.Item
              name="sesion"
              rules={[
                {
                  required: true,
                  message: (
                    <Notificacion
                      noti={
                        "Por favor, selecciona el tipo de sesión del personal a registrar"
                      }
                    />
                  ),
                },
              ]}
            >
              <Select
                placeholder="Seleccione el tipo de sesión del personal a registrar"
                suffixIcon={<IdcardOutlined />}
              >
                {sesionOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Contenido conTit={"Nombre(s):"} />
            <Form.Item
              name="nombre"
              rules={[
                {
                  required: true,
                  message: (
                    <Notificacion
                      noti={
                        "Por favor, ingresa el nombre(s) del personal a registra"
                      }
                    />
                  ),
                },
                {
                  validator: (_, value) => {
                    const trimmedValue = value && value.trim();
                    if (/^[A-Z]/.test(trimmedValue)) {
                      if (value !== trimmedValue) {
                        return Promise.reject("No se permiten espacios.");
                      }
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "La primera letra debe ser mayúscula."
                    );
                  },
                },
                {
                  pattern: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]{3,25}$/,
                  message: "Solo letras, longitud entre 3 y 25.",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Ingrese el nombre del personal a registrar"
              />
            </Form.Item>

            <Contenido conTit={"Apellido Paterno:"} />
            <Form.Item
              name="aPaterno"
              rules={[
                {
                  required: true,
                  message: (
                    <Notificacion
                      noti={"Por favor, ingresa tu apellido paterno"}
                    />
                  ),
                },
                {
                  validator: (_, value) => {
                    const trimmedValue = value && value.trim();
                    if (/^[A-Z]/.test(trimmedValue)) {
                      if (value !== trimmedValue) {
                        return Promise.reject(
                          "No se permiten espacios inicio/final."
                        );
                      }
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "La primera letra debe ser mayúscula."
                    );
                  },
                },
                {
                  pattern: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]{3,15}$/,
                  message: "Solo letras, longitud entre 3 y 15.",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Ingrese el apellido paterno del personal a registrar"
              />
            </Form.Item>

            <Contenido conTit={"Apellido Materno:"} />
            <Form.Item
              name="aMaterno"
              rules={[
                {
                  required: true,
                  message: (
                    <Notificacion
                      noti={"Por favor, ingresa tu apellido materno"}
                    />
                  ),
                },
                {
                  validator: (_, value) => {
                    const trimmedValue = value && value.trim();
                    if (/^[A-Z]/.test(trimmedValue)) {
                      if (value !== trimmedValue) {
                        return Promise.reject(
                          "No se permiten espacios al inicio/final."
                        );
                      }
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "La primera letra debe ser mayúscula."
                    );
                  },
                },
                {
                  pattern: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]{3,15}$/,
                  message: "Solo letras, longitud entre 3 y 15.",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Ingrese el apellido materno del personal a registrar"
              />
            </Form.Item>

            <Contenido conTit={"Teléfono:"} />
            <Form.Item
              name="telefono"
              rules={[
                {
                  required: true,
                  message: (
                    <Notificacion
                      noti={"Por favor, ingresa tu número de teléfono"}
                    />
                  ),
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: (
                    <Notificacion
                      noti={
                        "El número de teléfono debe contener exactamente 10 números"
                      }
                    />
                  ),
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Ingrese el número de teléfono del personal a registrar"
              />
            </Form.Item>

            <Contenido conTit={"Pregunta secreta:"} />
            <Form.Item
              name="pregunta"
              rules={[
                {
                  required: true,
                  message: (
                    <Notificacion
                      noti={
                        "Por favor, selecciona la pregunta secreta para el personal"
                      }
                    />
                  ),
                },
              ]}
            >
              <Select
                placeholder="Seleccione la pregunta secreta para el persona a registrar"
                suffixIcon={<IdcardOutlined />}
              >
                {preguntasSecretasOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Contenido conTit={"Respuesta a la pregunta secreta:"} />
            <Form.Item
              name="respuesta"
              rules={[
                {
                  required: true,
                  message: (
                    <Notificacion
                      noti={"Por favor, ingresa la respuesta a la pregunta"}
                    />
                  ),
                },
                {
                  pattern: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ0-9\s]{3,30}$/,
                  message: "Solo letras, números, longitud entre 3 y 30.",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Ingrese la respuesta a la pregunta del personal a registrar"
              />
            </Form.Item>

            <Contenido conTit={"Contraseña:"} />
            <Form.Item
              name="contra"
              rules={[
                {
                  required: true,
                  message: (
                    <Notificacion noti={"Por favor, ingresa tu contraseña"} />
                  ),
                },
                {
                  validator: async (_, value) => {
                    try {
                      if (typeof value !== "string") {
                        throw new Error("");
                      }
                      if (/\s/.test(value)) {
                        throw new Error(
                          "La contraseña no puede contener espacios."
                        );
                      }
                      if (!hasMinimumLength(value)) {
                        throw new Error(
                          "La contraseña debe tener al menos 8 caracteres."
                        );
                      }
                      if (!hasUpperCase(value)) {
                        throw new Error(
                          "La contraseña debe contener al menos una letra mayúscula."
                        );
                      }
                      if (!hasLowerCase(value)) {
                        throw new Error(
                          "La contraseña debe contener al menos una letra minúscula."
                        );
                      }
                      if (!hasNumber(value)) {
                        throw new Error(
                          "La contraseña debe contener al menos un número."
                        );
                      }
                      if (!hasSpecialChar(value)) {
                        throw new Error(
                          "La contraseña debe contener al menos un carácter especial."
                        );
                      }
                      return Promise.resolve();
                    } catch (error) {
                      throw new Error(error.message);
                    }
                  },
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Ingrese la contraseña del personal a registrar"
              />
            </Form.Item>

            <Contenido conTit={"Repite la contraseña:"} />
            <Form.Item
              name="contrasena"
              dependencies={["contra"]}
              rules={[
                {
                  required: true,
                  message: "Por favor, confirma tu contraseña.",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("contra") === value) {
                      setPasswordMatch(true);
                      setPasswordsMatchMessage("Las contraseñas coinciden."); // Añade esta línea
                      return Promise.resolve();
                    }
                    setPasswordMatch(false);
                    setPasswordsMatchMessage("Las contraseñas no coinciden."); // Añade esta línea
                    return Promise.reject("Las contraseñas no coinciden.");
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirme la contraseña antes ingresada"
              />
            </Form.Item>

            {/* Mostrar mensaje si las contraseñas no coinciden */}
            {!passwordMatch && (
              <Alert message="Las contraseñas no coinciden." type="error" />
            )}

            {/* Mostrar mensaje si las contraseñas coinciden */}
            {passwordMatch && passwordsMatchMessage && (
              <Alert message={passwordsMatchMessage} type="success" />
            )}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Registrar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}
