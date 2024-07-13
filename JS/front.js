const entrada_de_la_moneda=document.getElementById('entrance-coin');
const form_convertidor=document.getElementById('formulario')
const convertir=document.getElementById('button-convertir')
const error=document.getElementById("error");
const acierto=document.getElementById('acierto');

const verificar_letras = /[a-zA-Z]/;
const verificar_numeros = /\d/;

function convertir_entrada_de_la_moneda(event){
  event.preventDefault()
  if(entrada_de_la_moneda.value.length==0){
    entrada_de_la_moneda.focus()
    error.innerText= "Error: El campo de entrada no esta completado"
  }else if(verificar_letras.test(entrada_de_la_moneda.value)){
    entrada_de_la_moneda.focus();
    error.innerText= "Error: No se puede integrar letras en el campo"
  }else if(verificar_numeros.test(entrada_de_la_moneda.value)){
    error.innerText= 'La Moneda se ha convertido correctamnete'
    var USD = entrada_de_la_moneda.value / 20;
    document.getElementById('input-USD').value = USD;
    var ARS = entrada_de_la_moneda.value * 5;
    document.getElementById('input-ARS').value = ARS;
    var JPY = entrada_de_la_moneda.value * 0.5;
    document.getElementById('input-JPY').value = JPY;
  }
}

form_convertidor.addEventListener('submit', convertir_entrada_de_la_moneda)

