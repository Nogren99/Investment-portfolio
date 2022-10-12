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

/* FORMA OBSOLETA DE AGREGAR ACTIVOS MEDIANTE PROMPT


function agregarActivo(){

    let nuevoActivo = prompt("Ingrese un nuevo activo")
    let cant = prompt("ingrese el valor en dolares del activo")
    
    while(cant<0)
        cant = prompt("increse un valor mayor a 0")

    if(activos.find( e => e.nombre === nuevoActivo )){
        const i = activos.findIndex(e => e.nombre === nuevoActivo)
        console.log(i)
        activos[i].agrega(parseInt(cant)) 
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
*/


//FORMA ACTUAL DE AGREGAR ACTIVOS

let addAsset =document.getElementById("add-asset")
addAsset.addEventListener("click",addAssetItem)

let inputAsset = document.getElementById("asset-adder-box")
let inputPrice = document.getElementById("price-adder-box")


let assetList= document.getElementById("asset-list")


let balance=1000;
let newBalance=document.getElementById("balance")
newBalance.innerText="$"+ parseInt( balance)


function addAssetItem(){

    let assetItem = document.createElement("li")
    assetItem.innerText=inputAsset.value+"\t\t\t"+inputPrice.value
    balance+= parseInt(inputPrice.value)
    newBalance.innerText="$"+parseInt(balance)
    inputAsset.value=""
    inputPrice.value=""
    assetList.append(assetItem)

}