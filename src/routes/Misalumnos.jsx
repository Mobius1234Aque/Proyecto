import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Titulo } from "../components/Titulos";
import { Table } from "antd";
import { Input, Space, Select } from "antd";
const { Search } = Input;

const columns = [
  {
    title: "Nombre",
    dataIndex: "first_name",
    key: "first_name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Apellido",
    dataIndex: "last_name",
    key: "username",
  },
  {
    title: "Genero",
    dataIndex: "gender",
    key: "username",
  },
  {
    title: "Edad",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Grado",
    dataIndex: "grade",
    key: "grade",
  },
  {
    title: "Grupo",
    dataIndex: "group",
    key: "group",
  },
];

const SearchComponent = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterGrade, setFilterGrade] = useState("");

  const URL = "src/assets/datos.json";

  const showData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = users.filter((user) => {
    return (
      (!search ||
        user.first_name.toLowerCase().includes(search.toLowerCase())) &&
      (!filterGender || user.gender === filterGender) &&
      (!filterGrade || user.grade === filterGrade)
    );
  });

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <Header />
      <Titulo tit={"Mi lista de alumnos"} />
      <div
        style={{
          maxWidth: "100%",
          width: "1000px",
          textAlign: "center",
          display: "block",
          margin: "auto",
        }}
      >
        <Space>
          <Search
            placeholder="Ingrese su busqueda"
            value={search}
            onChange={searcher}
            type="text"
            className="form-control"
          />
          <Select
            placeholder="Filtrar por género"
            value={filterGender}
            onChange={setFilterGender}
          >
            <Option value="">Genero</Option>
            <Option value="Masculino">Masculino</Option>
            <Option value="Femenino">Femenino</Option>
          </Select>
          <Select
            placeholder="Filtrar por grado"
            value={filterGrade}
            onChange={setFilterGrade}
          >
            <Option value="">Grado</Option>
            {/* Asegúrate de tener las opciones correctas aquí */}
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
          </Select>
        </Space>

        <Table
          style={{ width: "850px", display: "block", margin: "auto" }}
          columns={columns}
          dataSource={results}
        />
      </div>
      <Footer />
    </>
  );
};

export default SearchComponent;
