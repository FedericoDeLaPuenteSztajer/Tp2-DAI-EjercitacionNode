import fs from 'fs'
let escrito= '../textfiles/CuentoGenial.txt'

function RobarTexto(file){

    const content= fs.readFile(file, 'utf-8')
    console.log(content)

    fs.rename(file, "../textfiles/CuentoGustaboBuenotte.txt")
    console.log("Archivo robado")

}

RobarTexto(escrito)