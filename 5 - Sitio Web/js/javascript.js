const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
var hoy = new Date();
var dia = hoy.getDate();
var mes = meses[hoy.getMonth()];
console.log("exito");
var fecha = `<span style="color: gold">${dia}</span> de <span style="color: violet">${mes}</span>`;
var getAnyo = `Copyright - Mysteka © ${hoy.getFullYear()}`
const piedras = [ 'Granate', 'Amatista', 'Aguamarina', 'Diamante', 'Esmeralda', 'Alejandrita', 'Rubí',
'Espinela', 'Zafiro', 'Turmanila','Topacio','Lapislázuli'];
var getGema = piedras[hoy.getMonth()];
var printGema = `Gema del mes: <a href="#" style="text-decoration: none; color: red;">${getGema}</a>`

const zodiaco = ['Acuario', 'Piscis', 'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Escorpio', 'Sagitario',
'Capricornio'];
var getZodiaco = zodiaco[hoy.getMonth()]
var printZodiaco = `Signo del mes: <a href="#" style="text-decoration: none; color: gold;">${getZodiaco}</a>`



inicio = () =>{
document.getElementById("fecha").innerHTML= fecha;
document.getElementById("zodiaco").innerHTML= printZodiaco;
document.getElementById("gema").innerHTML = printGema;
document.getElementById("copyright").innerHTML = getAnyo;
}

window.addEventListener("DOMContentLoaded",inicio);