import countryToCurrency  from  'currency-map-country'
//countryToCurrency[codigo]

let divisa;
let codigoPais1= 'AR';
let codigoPais2= 'BR';

function GetDivisa(codigo){
    return countryToCurrency[codigo]
}

divisa = GetDivisa(codigoPais1);
console.log(`La moneda del país ${codigoPais1} es: ${divisa}`);

divisa = GetDivisa(codigoPais2);
console.log(`La moneda del país ${codigoPais2} es: ${divisa}`);