const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors()); // Agregar CORS middleware
app.use(express.json()); // Middleware para analizar el cuerpo de la solicitud como JSON

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Coloca tu contraseña aquí
  database: 'zona012',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware para agregar el pool de conexiones a cada solicitud
app.use((req, res, next) => {
  req.mysqlPool = pool;
  next();
});

// Ruta de ejemplo que utiliza la conexión a la base de datos
app.get('/', async (req, res) => {
  try {
    const connection = await req.mysqlPool.getConnection();
    console.log('Conexión exitosa a la base de datos');
    connection.release();
    res.send('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    res.status(500).send('Error al conectar a la base de datos');
  }
});

// Ruta para insertar datos desde el formulario
app.post('/insertar-datossss', async (req, res) => {
    try {
      const { dato } = req.body; // Supongamos que el formulario envía un campo llamado 'dato'
      const connection = await req.mysqlPool.getConnection();
      // Reemplaza 'tu_tabla' con el nombre de tu tabla y 'nombre_del_campo' con el nombre de la columna
      await connection.query('INSERT INTO yo (dato) VALUES (?)', [dato]);
  
      connection.release();
      res.status(200).send('Dato insertado correctamente en la base de datos');
    } catch (error) {
      console.error('Error al insertar dato en la base de datos:', error);
      res.status(500).send('Error al insertar dato en la base de datos');
    }
  });
  
  app.get('/plantel', async (req, res) => {
    try {
      const query = 'SELECT id, nombre FROM plantel';  
      const connection = await req.mysqlPool.getConnection();
      const [results] = await connection.execute(query); 
      const options = results.map(result => ({
        value: result.id,
        label: result.nombre
      }));
      connection.release(); 
      res.json(options);
    } catch (error) {
      console.error('Error al obtener datos del plantel:', error);
      res.status(500).json({ error: 'Error al obtener datos del plantel' });
    }
  });

  app.get('/sesiones', async (req, res) => {
    try {
      const query = 'SELECT id, tipo_sesion FROM sesion';  // Ajusta la consulta según tu esquema de base de datos
  
      const connection = await req.mysqlPool.getConnection();
  
      const [results] = await connection.execute(query);
  
      // Mapear resultados para el formato esperado por Ant Design
      const options = results.map(result => ({
        value: result.id,
        label: result.tipo_sesion
      }));
  
      connection.release();
      res.json(options);
    } catch (error) {
      console.error('Error al obtener datos de sesiones:', error);
      res.status(500).json({ error: 'Error al obtener datos de sesiones' });
    }
  });
  app.get('/preguntas-secretas', async (req, res) => {
    try {
      const query = 'SELECT id, tipo_pregunta FROM pregunta';
      const connection = await req.mysqlPool.getConnection();
  
      const [results] = await connection.execute(query);
  
      const options = results.map(result => ({
        value: result.id,
        label: result.tipo_pregunta
      }));
  
      connection.release();
      res.json(options);
    } catch (error) {
      console.error('Error al obtener datos de preguntas secretas:', error);
      res.status(500).json({ error: 'Error al obtener datos de preguntas secretas' });
    }
  });
  
  app.post('/verificar-telefono', async (req, res) => {
    try {
        const { telefono } = req.body;
        const connection = await req.mysqlPool.getConnection();

        // Reemplaza 'registro' con el nombre de tu tabla y ajusta las columnas según tu esquema
        const query = 'SELECT COUNT(*) as count FROM registro WHERE telefono = ?';
        const [results] = await connection.execute(query, [telefono]);

        connection.release();
        
        const exists = results[0].count > 0;
        res.json({ exists });

    } catch (error) {
        console.error('Error al verificar la existencia del teléfono en la base de datos:', error);
        res.status(500).json({ error: 'Error al verificar la existencia del teléfono en la base de datos' });
    }
});


  app.post('/verificar-curp', async (req, res) => {
    try {
        const { curp } = req.body;
        const connection = await req.mysqlPool.getConnection();

        // Reemplaza 'registro' con el nombre de tu tabla y ajusta las columnas según tu esquema
        const query = 'SELECT COUNT(*) as count FROM registro WHERE curp = ?';
        const [results] = await connection.execute(query, [curp]);

        connection.release();
        
        const exists = results[0].count > 0;
        res.json({ exists });

    } catch (error) {
        console.error('Error al verificar la existencia de la CURP en la base de datos:', error);
        res.status(500).json({ error: 'Error al verificar la existencia de la CURP en la base de datos' });
    }
});
 
app.post('/insertar-dato', async (req, res) => {
  try {
      const {
          curp,
          plantel,
          sesion,
          nombre,
          aPaterno,
          aMaterno,
          telefono,
          pregunta,
          respuesta,
          contrasena
      } = req.body;

      const connection = await req.mysqlPool.getConnection();

      try {
          // Cifrar la contraseña antes de almacenarla en la base de datos
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

          // Cifrar la respuesta antes de almacenarla en la base de datos
          const hashedRespuesta = await bcrypt.hash(respuesta, saltRounds);

          const query = `
              INSERT INTO registro 
                  (curp, plantel, sesion, nombre, aPaterno, aMaterno, telefono, pregunta, respuesta, contrasena)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `;

          await connection.execute(query, [curp, plantel, sesion, nombre, aPaterno, aMaterno, telefono, pregunta, hashedRespuesta, hashedPassword]);

          res.status(200).send('Registro exitoso');
      } finally {
          connection.release();
      }
  } catch (error) {
      console.error('Error al insertar dato en la base de datos:', error);
      res.status(500).send('Error al insertar dato en la base de datos');
  }
});

 
app.post('/login', async (req, res) => {
  try {
      const { curp, plantel, sesion, contrasena } = req.body;
      console.log('Datos de inicio de sesión recibidos en el backend:', { curp, plantel, sesion });

      const connection = await req.mysqlPool.getConnection();

      try {
          const query = 'SELECT * FROM registro WHERE curp = ? AND plantel = ? AND sesion = ?';
          const [results] = await connection.execute(query, [curp, plantel, sesion]);

          if (results.length > 0) {
              const hashedPassword = results[0].contrasena;

              // Verificar la contraseña usando bcrypt
              const match = await bcrypt.compare(contrasena, hashedPassword);

              if (match) {
                  res.json({ success: true });
              } else {
                  console.log('Inicio de sesión fallido: Contraseña incorrecta');
                  res.json({ success: false, message: 'Contraseña incorrecta' });
              }
          } else {
              console.log('Inicio de sesión fallido: Usuario no encontrado');
              res.json({ success: false, message: 'Usuario no encontrado' });
          }
      } finally {
          connection.release();
      }
  } catch (error) {
      console.error('Error al procesar solicitud de inicio de sesión:', error);
      res.status(500).json({ success: false, message: 'Error al procesar solicitud de inicio de sesión' });
  }
});


async function verificarExistencia(campo, valor) {
  try {
    const connection = await pool.getConnection();
    try {
      const query = `SELECT COUNT(*) as count FROM registro WHERE ${campo} = ?`;
      const [results] = await connection.execute(query, [valor]);
      return results[0].count > 0;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error(`Error al verificar la existencia del ${campo} en la base de datos:`, error);
    throw error; // Lanzar la excepción para que sea manejada por el bloque catch externo
  }
}


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
