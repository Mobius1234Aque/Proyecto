import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Titulo } from "../components/Titulos";
import { Table } from "antd";
import { Input, Space } from "antd";
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
];

const SearchComponent = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

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

  const results = !search
    ? users
    : users.filter((user) =>
        user.first_name
          ? user.first_name.toLowerCase().includes(search.toLowerCase())
          : false
      );

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
        <Search
          placeholder="input search text"
          value={search}
          onChange={searcher}
          type="text"
          className="form-control"
        />

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
