import url from 'url';
const myPage = new URL ("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2349069/02-introduccion-a-node")

function Separate(newUrl){
    return {"host": newUrl.host, "pathname": newUrl.pathname, "parametros": newUrl.searchParams}
}

console.log(Separate(myPage));
