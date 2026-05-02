//Primer codigo

/* const fs = require('fs');

const crearArchivo = async ( j = 5, listar = false ) => {
    try {
        let salida = '';
        for(i = 1; i <= 10; i++){
            salida += `${j} x ${i} = ${j * i}\n`;
        }

        if(listar){
            console.log('=============');
            console.log(' Tabla del: ', j);
            console.log('=============');
            console.log(salida);
        }

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);
        return `Tabla del ${j}`;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
} */

//Segundo codigo colores

/* const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( j = 5, listar = false ) => {
    try {
        let salida = '';
        for(i = 1; i <= 10; i++){
            salida += `${j} x ${i} = ${j * i}\n`;
        }

        if(listar){
            console.log('============='.green);
            console.log(' Tabla del: ', colors.blue(j));
            console.log('============='.blue);
            console.log(salida);
        }

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);
        return `Tabla del ${j}`;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
} */

//Tercer codigo

const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( j = 5, listar = false, hasta = 10 ) => {
    try {
        let salida = '';
        let consola = '';
        for(i = 1; i <= hasta; i++){
            salida += `${j} x ${i} = ${j * i}\n`;
            consola += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`;
        }

        if(listar){
            console.log('============='.green);
            console.log(' Tabla del: ', colors.blue(j));
            console.log('============='.blue);
            console.log(consola);
        }

        /* fs.writeFileSync(`tabla-del-${j}.txt`, salida); */
//Cambio para la salida
        fs.writeFileSync(`./salida/tabla-del-${j}.txt`, salida);
        return `Tabla del ${j}`;

    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}