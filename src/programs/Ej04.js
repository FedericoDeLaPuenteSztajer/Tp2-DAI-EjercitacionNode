/**import fs from 'fs'
let escrito= '../textfiles/CuentoMatiasGerez'

function RobarTexto(file){

    const content= fs.readFile(file, 'utf-8')    
    console.log(content)

    fs.rename(file, "../textfiles/CuentoGustaboBuenotte")
    console.log("Archivo robado")

}

RobarTexto(escrito)
*/

//-----------------------------------------------------------------------

/**
import fs from 'fs/pormises';

const ARCHIVO_ENTRADA           = "../textfiles/CuentoMatiasGerez";
const ARCHIVO_SALIDA            = "../textfiles/CuentoGustaboBuenotte";

function copiar(origen, destino){

    fs.readFile(origen, utf-8)

}

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
*/