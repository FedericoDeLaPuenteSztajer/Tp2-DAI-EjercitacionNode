import url from 'url';
//https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2349069/02-introduccion-a-node

function ParseUrl(){
    try{
        const myPage = new URL ("JoaquinTamal")
        console.log("It works!")
        return myPage.href
    }catch(error){
        console.log("Invalid url")
        return "null"
    }
}

console.log(ParseUrl())
