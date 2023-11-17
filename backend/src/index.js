const userRoutes = require("./routes/user");
const express = require ("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 3003;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const apiPractica = 
    {name: "Christian", lastName: "San Juan", email: "christian.sanjuan@alumnos.ucn.cl", city: "Antofagasta", country:"Chile", summary:"Estudiante...",
    frameworks: [{name: "React",level:"Principiante",year:"2023" }, {name: "Python",level:"Principiante",year:"2020" }], hobbies:[{name: "", description: ""}, {name: "", description: ""}]}


//RUTAS
app.get("/",(req,res)=>{
    res.send("Bienvenido a la API de Practica 2");
})

app.use("/api",userRoutes)


//mongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a MONGODB"))
.catch((error) =>console.error(error));

app.listen(port, () => {
    console.log(`API  en el puerto ${port}`);
  });
