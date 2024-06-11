const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

const PUERTO = 3000;

const conexion = mysql.createConnection({
  host: "localhost",
  database: "managments",
  user: "root",
  password: "contra123",
});

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});

conexion.connect((error) => {
  if (error) throw error;
  console.log(`Conexión exitosa a la base de datos`);
});

app.get("/", (req, res) => {
  res.send(`API`);
});

app.get("/list_users", (req, res) => {
  const query = "SELECT * FROM list_users";
  conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.json([]);
    }
  });
});

app.get("/list_users/:cip", (req, res) => {
  const { cip } = req.params;

  const query = `SELECT * FROM list_users WHERE cip = ?`;
  conexion.query(query, [cip], (error, resultado) => {
    if (error) return console.error(error.message);

    if (resultado.length > 0) {
      res.json(resultado[0]);
    } else {
      res.json(`No hay registro con este cip`);
    }
  });
});

//Función que me permite convertir mi fecha al formato YYYY-MM-DD
let formatDate = (date) => {
  return date.toISOString().split("T")[0];
};

app.post(`/list_users/agregar`, (req, res) => {
  const list_users = {
    fecha:formatDate(new Date(req.body.fecha)),
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cip: req.body.cip,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    departamento: req.body.departamento,
    email: req.body.email,
    estatus: req.body.estatus,
    entrada: req.body.entrada,
    sal_alm: req.body.sal_alm,
    ent_alm: req.body.ent_alm,
    salida: req.body.salida
  };

  const query = `INSERT INTO list_users SET ?`;
  conexion.query(query, list_users, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se insertó correctamente el colaborador`);
  });
});

app.put(`/list_users/actualizar/:cip`, (req, res) => {
  const { cip } = req.params;
  const {
    fecha,
    nombre,
    apellido,
    direccion,
    telefono,
    departamento,
    email,
    estatus,
    entrada,
    sal_alm,
    ent_alm,
    salida,
  } = req.body;

  const query = `UPDATE list_users SET 
    fecha = ?, 
    nombre = ?, 
    apellido = ?, 
    direccion = ?, 
    telefono = ?, 
    departamento = ?, 
    email = ?, 
    estatus = ?, 
    entrada = ?, 
    sal_alm = ?, 
    ent_alm = ?, 
    salida = ? 
    WHERE cip = ?`;
  
  const valores = [
    formatDate(new Date(fecha)),
    nombre,
    apellido,
    direccion,
    telefono,
    departamento,
    email,
    estatus,
    entrada,
    sal_alm,
    ent_alm,
    salida,
    cip  
  ];

  conexion.query(query, valores, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se actualizó correctamente la información del colaborador`);
  });
});

app.delete(`/list_users/borrar/:cip`, (req, res) => {
  const { cip } = req.params;
  const query = `DELETE FROM list_users WHERE cip = ?`;
  conexion.query(query, [cip], (error, resultado) => {
    if (error) return console.error(error.message);

    res.json(`Se eliminó correctamente la información del colaborador`);
  });
});
