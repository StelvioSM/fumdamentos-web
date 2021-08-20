let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let asssunto = document.querySelector('#assunto')
let nomeOK= false
let emailOK = false
let asssuntoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'

email.style.width = '100%'

asssunto.style.width = '100%'

function validaNome (){
    let txtNome = document.querySelector("#txtNome")
   
    if(nome.value.length<3){
        txtNome.innerHTML = "Nome Invalido"
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
    
    } else{
        txtNome.innerHTML="Nome Valido"
        txtNome.style.color= "green"
        nomeOK= true
    }
}

function validaEmail (){
let txEmail = document.querySelector("#txtemail")

if(email.value.indexof("@") == -1||email.value.indexof(".")==-1){
txEmail.innerHTML = "E-mail Invalido"
txEmail.style.color = "red"
}else{
    txEmail.innerHTML = "E-mail valido"
    txEmail.style.color = "green"
    emailOK= true
}

}
function validaAssunto(){

    let txtAssunto = document.querySelector("#txtAssunto")
    if(asssunto.value.length >=100){
        txtAssunto.innerHTML = "Texto e muito grande, digite no maximo 100 caracteres "
        txtAssunto.style.color="red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        asssuntoOK = true
}
    function enviar() {
        if (nomeOK == true && emailOK == true && asssuntoOK == true){
            alert ("Formulario enviado com Sucesso!")
        }else {
            alert( "Preencha o formulario corretamente antes de enviar ...")

        }
    }
    }
function mapaZoom(){
 mapa.style.width = "800px"
 mapa.style.width = "600px"
}

function mapaNormal(){
    mapa.style.width = "450px"
    mapa.style.width = "350px"
}
