const express = require("express")
const app = express()
const archivo = require("fs");
const path = "./files/bitacora.json";

app.get("/",(req,res)=>{
    res.send("Bienvenido")
});
app.get("/:usuario&:detalle",(req,res)=>{
  let usuario = req.params.usuario;
  let detalle = req.params.detalle;
  let resultado = archivo.readFileSync(path, {encoding:"utf-8"});
  resultado=JSON.parse(resultado);
  let indice = resultado.pacientes.map(user => user.nombre).indexOf(usuario);
  if(indice >=0){
      resultado.pacientes[indice].bitacora.push(detalle);
      

  }else{
     
      registro = {"nombre":usuario,"bitacora":[detalle]}
      resultado.pacientes.push(registro)
  }
  archivo.writeFileSync(path, JSON.stringify(resultado));
  res.send("Detalle Almacenado")
});

app.listen(3000,()=>{
    console.log("Servicio activo puerto 3000")
})