const entrada_de_la_moneda=document.getElementById('entrance-coin');
const form_convertidor=document.getElementById('formulario')
const convertir=document.getElementById('button-convertir')
const error=document.getElementById("error");

const verificar_letras = /[a-zA-Z]/;
const verificar_numeros = /\d/;

function convertir_entrada_de_la_moneda(event){
  event.preventDefault()
  if(entrada_de_la_moneda.value.length==0){
    console.log("No hay una cantida especifica..");
    error.innerText= "Error: El campo de entrada no esta completado"
  }else if(verificar_letras.test(entrada_de_la_moneda.value)){
    console.log("No se integran letras");
    error.innerText= "Error: No se puede integrar letras en el campo"
  }else if(verificar_numeros.test(entrada_de_la_moneda.value)){
    console.log("Hay un numero");
    event.preventDefault();
    error.innerText= "Hay un numero"
  }
}

form_convertidor.addEventListener('submit', convertir_entrada_de_la_moneda)

