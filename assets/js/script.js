let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let asssunto = document.querySelector('#assunto')


nome.style.width = '100%'

email.style.width = '100%'

asssunto.style.width = '100%'

function validaNome (){
    let txt = document.querySelector("#txtNome")

    if(nome.Value.length<3){
        
        txt.innerHTML = "Nome Invalido"
        txt.style.color = "red"
    
    } else{
        txt.innerHTML="Nome Valido"
        txt.style.color= "green"
    }

}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.Value.indexof ("@")==-1 || email.Value.indexof(".")== -1 ){
        txtEmail.innerHTML="Email Invalido"
        txtEmail.style.color= "red"
    } else{
        txtEmail.innerHTML="Email valido"
        txtEmail.style.color= "green"
    }
}