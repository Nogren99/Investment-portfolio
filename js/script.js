function verificacion(dato){
    let valido = false

    while(!valido){
        if ( dato.length>16 || dato.length<8 )
            dato = prompt("Ingrese un nombre entre 8 y 16 caracteres")
        else
            valido =true      
    }
}


let userName = prompt("Ingrese su nombre de usuario")
verificacion(userName)

let pass = prompt("Ingrese contraseña")
verificacion(pass)





