$(document).ready(function(){

  //console.log("checking the path is linked correctly");

  //recogemos variables:
  var form = document.getElementsByTagName('form')[0]; //siempre hay que poner el 0 porque esto nos devulve un array, así que aunque solo haya un form hay que seleccionar el elemento.

  //si hicisen falta todas, aquí estarían:
  var inputName = document.getElementById("name");
  // var inputSurname = document.getElementById("surname");
  //
  // var inputEmail = document.getElementById("email");
  // var inputNumber = document.getElementById("number");
  //
  // var inputRadius = {
  //   radio1: document.getElementById("online"),
  //   radio2: document.getElementById("linkedin"),
  //   radio3: document.getElementById("someone2")
  // }

  var inputTextField = document.getElementById("texto");


  //prevent envio:
  form.addEventListener("submit",function(event){
    if (inputTextField.value.split(" ").length > 149){
      alert("Tell me something is a field that must not exceed 150 words.");
      inputTextField.focus();
      event.preventDefault();
      return false;
    }
  });


});
