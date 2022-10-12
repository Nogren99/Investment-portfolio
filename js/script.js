class user{
    constructor(user,pass){
        this.user=user
        this.pass=pass
    }
}

function verificacion(dato,user){

    if ( dato.length>16 || dato.length<8 ){
        alert("Ingrese un nombre entre 8 y 16 caracteres")
        return false
    }else
        if(users.some(e => e.user == dato) && user==1){
            alert("Nombre de usuario ya existente")
            return false
        }else
            return true      
    
}



let users= []

let newUser = document.getElementById("newUser")
newUser.addEventListener("click",(e)=>{
    e.preventDefault()
})
newUser.addEventListener("click",register)

let inputUser = document.getElementById("newUser")
let inputPass = document.getElementById("Pass")


function register(){


    while(!verificacion(inputUser,1) || !verificacion(inputPass,0)){
        let inputUser = document.getElementById("newUser")
        let inputPass = document.getElementById("Pass")
        inputUser.value=""
        inputPass.value=""
    }

    users.push(new user(inputUser.value,inputPass.value))
    console.log(user)

}

