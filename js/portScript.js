class asset{
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

let asset1 = new asset("MSFT",500)
let asset2 = new asset("AAPL",300)
let asset3 = new asset("TESLA",200)

let assets =[asset1,asset2,asset3]

let addAsset =document.getElementById("add-asset")
addAsset.addEventListener("click",addAssetItem)

let inputAsset = document.getElementById("asset-adder-box")
let inputPrice = document.getElementById("price-adder-box")


let assetList= document.getElementById("asset-list")


let balance=1000;
let newBalance=document.getElementById("balance")
newBalance.innerText="$"+ parseInt( balance)


function addAssetItem(){

    balance+= parseInt(inputPrice.value)
    newBalance.innerText="$"+parseInt(balance)

    if(assets.find( e => e.nombre === inputAsset.value )){
        const i = assets.findIndex(e => e.nombre === inputAsset.value)
        console.log(inputAsset.value+" se encuenta en la posicion: "+i)
        assets[i].agrega(parseInt(inputPrice.value)) 
        //for(const act of assets) // test para ver si carga correctamente
        //    console.log(act.nombre+act.valor)

    }else{
        assets.push(new asset(inputAsset.value,parseInt(inputPrice.value)))
        let assetItem = document.createElement("li")
        assetItem.innerText=inputAsset.value+"\t\t\t"+inputPrice.value
        assetList.append(assetItem)
    }
          
    inputAsset.value=""
    inputPrice.value=""

}



for (const act of assets){
    let assetItem = document.createElement("li")
    assetItem.innerHTML=act.nombre+"\t\t\t"+act.valor
    assetList.append(assetItem)
}

