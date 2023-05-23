function validar() {
    //Recoger email y validar que tenga el formato adecuado
    var email = document.getElementById("email").value;
    var regexMail = /[a-zA-Z]+@[a-zA-Z]*\.[a-zA-Z]+/; 
    var mailValido = regexMail.test(email); 

    if (!mailValido)
    {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Formato de email inválido',
            confirmButtonText: 'Aceptar'
        }) 
    }
    else 
    {
        //Crear el JSON y pasarlo a string
        var data = {
            email: email,
        };
        
        var dataStr = JSON.stringify(data); 
        
        //Mensaje de success con el string del JSON del email que se va a enviar
        Swal.fire({
            icon: 'success',
            text: dataStr,
        })
    }

}