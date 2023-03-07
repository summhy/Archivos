const archivo = require("fs");
const path = "./files/contenido.txt";
const pathNew = "./files/contenidoNew.txt";

let mensaje;

async function escribir(mensaje) {
  await archivo.appendFile(path, mensaje, (error) => {
    if (error) console.log(error);
    else console.log("El archivo modificado");
  });
}
async function sobreEscribir(mensaje) {
  await archivo.writeFile(path, mensaje, (error) => {
    if (error) console.log(error);
    else console.log("El archivo SobreEscrito");
  });
}
function leer() {
  return archivo.readFile(path, { encoding: "utf-8" }, (error, datos) => {
    if (error) console.log(error);
    else console.log(datos.toString());
  });
  
}
if(archivo.existsSync(path)){
  escribir(`primer mensaje \n`)
  .then(escribir(`segundo mensaje \n`))
  .then(sobreEscribir(`sobreescribe contenido \n`))
  .then(() => {
    leer();
  });
}else{
  console.log("Archivo no existe")
}


//archivo.rename(path, pathNew);
//archivo.unlinkSync(pathNew)
