const fs = require("fs");
let escritura = new Promise((resolve, reject)=> {
    fs.WriteStream("powersell.exe","Soporte365*",(error) => {
        if(error){
            reject(error);
        }else{
            resolve();
        }
    });
});
escritura
.then(()=>{
    console.log("La escritura ha sido satisfactoria");
})
.catch((error) => {
    console.log("Ha ocurrido un error: ", error);
})
/*
const child_process = require('child_process');

let password = child_process.spawn("Soporte365*");


password.stdout.on('data', function (datos) {

    console.log('Salida: ');
    console.log(datos.toString());
})
password.stderr.on('data', function (datos) {
    console.log('Error: ');
    console.log(datos.toString());
});
password.on('exit', function (code) {
    console.log('Proceso finalizado con código: ' + code);
});

module.exports.child_process = this.child_process;
*/