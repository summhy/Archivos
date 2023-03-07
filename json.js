const archivo = require("fs");
const path = "./files/bitacora.json";

archivo.writeFileSync(path,'{"pacientes":[]}');

function AgregarDiagnostico(usuario,detalle){
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

}

AgregarDiagnostico("susana1","evento1");
AgregarDiagnostico("susana1","evento2");
AgregarDiagnostico("susana3","evento1"); 
AgregarDiagnostico("susana4","evento1");
