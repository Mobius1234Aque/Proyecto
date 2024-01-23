import React, { useState } from "react";

import { Header } from "../components/Header";

import { Footer } from "../components/Footer";

import { FloatButton } from "antd";

import Contenido from "../components/ChatBot";

import { Subtitulo, Titulo } from "../components/Titulos";

import "../css/Preguntas.css";

import { Card, Space } from "antd";

export function Preguntas() {
  const [showChatBot, setShowChatBot] = useState(false);

  const handleOnClick = () => {
    setShowChatBot(!showChatBot);
  };
  return (
    <>
      <Header />
      <Titulo tit={"Preguntas frecuentes"} />

      <div
        className="contendor-preguntas"
        style={{
          maxWidth: "100%",
          width: "1200px",
          textAlign: "center",
          display: "block",
          margin: "auto",
        }}
      >
        <Space direction="vertical" size={20}>
          <Card
            title="¿Cómo se puede registrar?"
            style={{
              width: 300,
              margin: "20px",
              border: "1px solid black",
            }}
          >
            <p>
              El registro depende completamente de los directivos quienes les
              proporcionaran una cuenta en caso de ser trabajador de algun
              plantel de la zona
            </p>
          </Card>
        </Space>
        <Space direction="vertical" size={16}>
          <Card
            title="¿Error de documento?"
            style={{
              width: 300,
              margin: "20px",
              border: "1px solid black",
            }}
          >
            <p>
              Se debe a que el documento no se encuentra en el formato correcto
              o que el documento pese más de lo indicado en el apartado
            </p>
          </Card>
        </Space>
        <Space direction="vertical" size={16}>
          <Card
            title="¿Cómo puedo realizar un examen?"
            style={{
              width: 300,
              margin: "20px",
              border: "1px solid black",
            }}
          >
            <p>
              Para realizar un examen es importante ir al apartado de "generar
              examen" y seleccionar la correspondiente, posteriormenete llenar
              lo solicitado.
            </p>
          </Card>
        </Space>
        <div>
          <FloatButton onClick={handleOnClick} />
          {showChatBot && (
            <div
              style={{
                position: "fixed",
                bottom: 75,
                right: 45,
                overflow: "auto",
                zIndex: 1000,
              }}
            >
              <Contenido />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
