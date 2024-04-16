
 let i=1;
 let bandera = false;

while (i < 4) {
   
             
    console.log('Es su intento nº ', i);
    let usuario = prompt ('Ingrese nombre de Usuario');
    let bandera = validarUsuario(usuario);

    if (bandera === true) {
        console.log('Nombre de Usuario correcto');
        let password = prompt('Ingrese contraseña');
        validarPassword(password);
        // console.log ("Validación correcta");
        break;
      }
      
    i++;
    if (i>3) {
        console.warn("Se sobrepasó la cantidad de intentos. Intente de nuevo más tarde");
      break;
    }
}


function validarUsuario(usuario) {
    if (usuario === '') {

        console.warn('No ha ingresado ningún valor');
    } else if (typeof usuario != "string") {
        console.warn('No ha ingresado un valor de tipo string');

    }
        else {
        bandera = true;
        return(bandera);
            
        }
    
}
function validarPassword(password) {
    const caracter = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6}$/;

    if (password.match(caracter)) {

        alert("El password es correcto y seguro !");

    } else {

        alert("El password debe contener al menos una minúscula, mayúscula, número y un carácter especial. Y 6 carácteres como mínimo.");
        

    }

}




