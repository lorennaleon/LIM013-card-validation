import validator from './validator.js';76
//click funcion al boton validar
document.getElementById('btn-validar').addEventListener('click',function(){
  //llamo a la caja de tarjeta de credito del html
  let numero =document.getElementById('inputNumero').value;
  //llamo al validador isvalid de validator.js 
  let resultado=validator.isValid(numero);
  //ocultar
  let numeroOculto =validator.maskify(numero);
  if(resultado==true){
    document.getElementById('resultado').innerHTML+= numeroOculto + " "+ "es válida";
    
  } else{
    document.getElementById('resultado').innerHTML+= numeroOculto + " "+ "es inválida";
  }
});
  