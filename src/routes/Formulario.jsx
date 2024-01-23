import React, { useState } from 'react';

const Formulario = () => {
  const [dato, setDato] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/insertar-datossss', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dato }),
      });

      if (response.ok) {
        console.log('Dato insertado correctamente en la base de datos');
        // Puedes realizar acciones adicionales aquí si es necesario
      } else {
        console.error('Error al insertar dato en la base de datos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dato:
        <input type="text" value={dato} onChange={(e) => setDato(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
