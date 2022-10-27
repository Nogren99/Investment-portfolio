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

/*
let asset1 = new asset("MSFT",500)
let asset2 = new asset("AAPL",300)
let asset3 = new asset("TESLA",200)

let assets =[asset1,asset2,asset3]
*/

let assets =[]
let nombres=[]
let valores=[]
let addAsset =document.getElementById("add-asset")
addAsset.addEventListener("click",addAssetItem)

let inputAsset = document.getElementById("asset-adder-box")
let inputPrice = document.getElementById("price-adder-box")


let assetList= document.getElementById("asset-list")


let balance=0;
let newBalance=document.getElementById("balance")
newBalance.innerText="$"+ parseInt( balance)


function addAssetItem(){

    balance+= parseInt(inputPrice.value)
    newBalance.innerText="$"+parseInt(balance)

    if(assets.find( e => e.nombre === inputAsset.value )){
        const i = assets.findIndex(e => e.nombre === inputAsset.value)
        assets[i].agrega(parseInt(inputPrice.value)) 
        location.reload();
    }else{
        assets.push(new asset(inputAsset.value,parseInt(inputPrice.value)))
        let assetItem = document.createElement("li")


        let buttonDelete = document.createElement('i')
        buttonDelete.classList.add('bi','bi-trash')
        assetItem.innerText=inputAsset.value+"\t\t\t"+inputPrice.value+"\t\t\t\t\t\t\t\t\t"
        buttonDelete.addEventListener("click",deleteAsset)
        actualizaChart()
        myChart.update()
        assetItem.append(buttonDelete)
        assetList.append(assetItem)
    }
    localStorage.setItem("list",JSON.stringify(assets))
    
    console.log("lo cargue")
    Toastify({
        text: `Activo ${inputAsset.value} añadido correctamente!`,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    
    //myChart.data.datasets[0].data.push(inputPrice.value)
    

    inputAsset.value=""
    inputPrice.value=""

}



function saveList(){
    localStorage.setItem("list",JSON.stringify(assets))
}

//cargar portfolio

function loadList(){
    let list = JSON.parse(localStorage.getItem("list")) // traigo un array de objetos

    for(let i=0 ;i<list.length;i++){
        
        console.log(list[i].nombre)
        console.log(list[i].valor)
        balance+= parseInt(list[i].valor)
        newBalance.innerText="$"+parseInt(balance)


        assets.push(new asset(list[i].nombre,parseInt(list[i].valor)))
        let assetItem = document.createElement("li")
        let buttonDelete = document.createElement('i')
        buttonDelete.classList.add('bi','bi-trash')
        assetItem.innerText=list[i].nombre+"\t\t\t"+list[i].valor
        buttonDelete.addEventListener("click",deleteAsset)
        assetItem.append(buttonDelete)
        assetList.append(assetItem)
        
        localStorage.setItem("list",JSON.stringify(assets))
        
            
    }

}

//eliminar activo

function deleteAsset(){
    Swal.fire({
        title: '¿Seguro que quieres eliminar este activo?',
        showDenyButton: true,
        
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cancelar`,
        confirmButtonColor: '#d33',
        denyButtonColor: 'grey',
      }).then((result) => {
        if (result.isConfirmed) {
            /*
            const i = assets.findIndex(e => e.nombre === this.nombre)
            assets[i].remove();
            saveList();
            
            Swal.fire('¡Activo Eliminado!', '', 'success')
            */
        } else if (result.isDenied) {
            Swal.fire('No se eliminó el activo', '', 'info')
        }
      })
}

//eliminar portfolio


let emptyButton = document.getElementById("delete-portfolio")
emptyButton.addEventListener("click",emptyList)

function emptyList(){
    
    Swal.fire({
        title: 'Seguro que quieres eliminar esta cartera?',
        showDenyButton: true,
        
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cancelar`,
        confirmButtonColor: '#d33',
        denyButtonColor: 'grey',
      }).then((result) => {
        if (result.isConfirmed) {
            assetList.innerHTML=""
            assets =[]
            balance=0
            newBalance.innerText="$"+ parseInt(balance)
            
            actualizaChart()
            myChart.update()
            saveList();
            Swal.fire('Eliminado!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('No se eliminó la cartera', '', 'info')
        }
      })

    
}

loadList()


const ctx = document.getElementById('assetChart').getContext('2d');

function actualizaChart(){
    
    for (i=0; i<assets.length;i++){
        nombres[i]=assets[i].nombre;
    }

    for (i=0; i<assets.length;i++){
        valores[i]=assets[i].valor;
    }

     
}
actualizaChart()

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: nombres,
        datasets: [{
            label: '# of Votes',
            data: valores,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    

});





