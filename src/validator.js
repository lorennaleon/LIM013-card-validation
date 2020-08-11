const validator = {
  isValid: function (numero_tarjeta) {
    let cadena = numero_tarjeta.toString();
    let longitud = cadena.length;
    let cifra = null;
    let cifra_cad=null;
    let suma=0;
    for (let i=0; i < longitud; i+=2){
      cifra = parseInt(cadena.charAt(i))*2;
      if (cifra > 9){ 
        cifra_cad = cifra.toString();
        cifra = parseInt(cifra_cad.charAt(0)) + 
   parseInt(cifra_cad.charAt(1));
      }
      suma+=cifra;
    }
    for (let i=1; i < longitud; i+=2){
      suma += parseInt(cadena.charAt(i));
    }
     
    if((suma % 10)==0){
      return true;
    }else{
      return false;
     }
  },
  maskify: function (numero_tarjeta) {
    let longitudNumero = numero_tarjeta.length;
    let result = "";
    if (longitudNumero > 4) {
      for (let i = 0; i < numero_tarjeta.length; i++) {
        if (i >=numero_tarjeta.length - 4) {
          result += numero_tarjeta[i];
        } else {
          result += "#";
        }
      }
    } else {
      result = numero_tarjeta
    }
    return result;
  }

};
export default validator;
