function totalAct(cant){
    total+= parseInt(cant)
}

function agregarActivo(){
    let nuevoActivo 
    let cant 
    let ready=false
    let res

    while(!ready){
        nuevoActivo = prompt("Ingrese un nuevo activo")
        cant = prompt("increse el valor del activo")
        while(cant<0){
            cant = prompt("increse un valor mayor a 0")
        }
        totalAct(cant);

        res =  prompt("Desea agregar otro activo? si/no")
        if(res.toUpperCase()=="NO")
            ready=true

    }

}

let total = 0;
agregarActivo()

prompt ("Su total actual es " + total)



