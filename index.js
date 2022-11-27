// Validador de usuario------------------------------------------------------------------------

let nUsuario = prompt("Ingrese su correo electronico")

const cUsuario="123contra!"
const pepito="pepito@gmail.com"

const validarNUsuario =nUsuario=>{
   
    let cont=0
    
    let longi= nUsuario.length
   

    for(let i=0;i<longi;i++){
       let caracter=nUsuario.charAt(i)
        console.log(caracter)
        
        if(caracter==="@"){
            
            cont=cont+1
            
        }
    }
     console.log(cont)
    if (cont===1 && nUsuario===pepito){
        return "Hola Pepito"
    }
    else{
        return "Nombre De Usuario Incorrecto o formato incorrecto; debe tener el formato ususario@email.com"
    }

}
alert(validarNUsuario(nUsuario))


// Validador contraseña-----------------------------------------------------------------------------

let contrasenia=prompt("Ingrese su contraseña")



const validarContrasenia=contrasenia=>{

    if(contrasenia.length<8){
        return "contraseña debe tener 8 o mas caracteres"
    }
    if((/^[^A-Za-z]*$/).test(contrasenia) && (/^[^0-9]*$/).test(contrasenia)){
        return "La contraseña debe contener letras y numeros"
    }
    if((/^[^A-Za-z]*$/).test(contrasenia) && (/^[^0-9]*$/).test(contrasenia)){
        return "La contraseña debe contener letras y numeros"
    }
    if((/^[^-!.@_]*$/).test(contrasenia)){
        return "La contraseña debe contener al menos uno de estos caracteres especiales !-_.@"
    }
    if(contrasenia==="123contra!"){
    return "bienvenido"
}
    else{
        return "contraseña incorrecta"
    }

}

alert(validarContrasenia(contrasenia))