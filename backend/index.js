const express = require ("express");
const app = express();
const port = 3003;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const apiPractica = [
    {name: "Christian", lastName: "San Juan", email: "christian.sanjuan@alumnos.ucn.cl", city: "Antofagasta", country:"Chile", summary:"Estudiante...",
    frameworks: [{name: "React",level:"Principiante",year:"2023" }, {name: "Python",level:"Principiante",year:"2020" }], hobbies:[{name: "", description: ""}, {name: "", description: ""}]}
]

app.get("/api/profile",(req,res)=>{
    res.send(apiPractica);
})

app.listen(port, () => {
    console.log(`API  en el puerto ${port}`);
  });
