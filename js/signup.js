function validar() {
    //Recoger las variables del formulario
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var pass1 = document.getElementById("pass2").value;
    var aceptaPrivacidad = document.getElementById('private-policy').checked;

  
    //Comprobar que los formatos de email y contraseña son correctos
    var regexMail = /[a-zA-Z]+@[a-zA-Z]*\.[a-zA-Z]+/; 
    var regexPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}/;
    
    var mailValido = regexMail.test(email); 
    var passValida = regexPass.test(pass);
      

    //Si algún campo está vacío
    if (nombre == "" || apellidos == "" || email == "" || pass == "" || pass1 == "") 
    {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Quedan campos vacíos',
            confirmButtonText: 'Aceptar'
        }) 
    } 
    //Si el formato del mail no es válido
    else if (!mailValido)
    {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Formato de email inválido',
            confirmButtonText: 'Aceptar'
        }) 
    }
    //Si el formato de la contraseña no es válido
    else if (!passValida)
    {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Formato de contraseña inválido',
            confirmButtonText: 'Aceptar'
        }) 
    }
    //Si las contraseñas no coinciden
    else if (pass != pass1) 
    {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Las contraseñas no coinciden',
            confirmButtonText: 'Aceptar'
        })
    } 
    //Si no ha aceptado la política de privacidad
    else if (!aceptaPrivacidad) 
    {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Por favor, acepte la Política de Privacidad',
            confirmButtonText: 'Aceptar'
        })
    } 
    //Si el formulario es válido
    else
    {   
        //Crear el JSON y pasarlo a string
        var data = {
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            password: pass,
        };
        
        var dataStr = JSON.stringify(data); 
        
        //Mensaje de success con el string del JSON que se va a enviar
        Swal.fire({
            icon: 'success',
            title: '¡Formulario enviado!',
            text: dataStr,
        })
    }
}