class activo{
    constructor(nombre,valor){
        this.nombre=nombre
        this.valor=valor
    }
    agrega(cant){
        this.valor+=parseInt(cant)
    }
    quita(cant){
        if(cant<this.valor)
            this.valor-=parseInt(cant)
        else 
            this.valor=0
    }
}

function agregarActivo(){

    let nuevoActivo = prompt("Ingrese un nuevo activo")
    let cant = prompt("ingrese el valor en dolares del activo")
    
    while(cant<0)
        cant = prompt("increse un valor mayor a 0")

    if(activos.includes(nuevoActivo)){//si es igual devuelve TRUE
        let i = activos.indexOf(nuevoActivo)
        activos[i].agrega(cant) 
    }else
        activos.push(new activo(nuevoActivo,cant))
}

let activos = []  //Array de objetos, cada objeto es un activo que ingresa el usuario
let ready = false

while(!ready){
    let res

    agregarActivo()
    res =  prompt("Desea agregar otro activo? si/no")
        if(res.toUpperCase()=="NO")
            ready=true


}

//muestra de array de objetos
for (const act of activos){
    console.log(act)
}
