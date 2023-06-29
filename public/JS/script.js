
let refFoto = document.getElementById('foto_ref');
refFoto.style.display = "none";
let refFoto_ilus = document.getElementById('foto_ref_ilus');
refFoto_ilus.style.display = "none";

function mostrarRef(){
    var refSelect = document.getElementById("ref").value;
    if (refSelect == "Sim"){
        refFoto.style.display = "block";
    }else{
        refFoto.style.display = "none"; 
    }
}

function mostrarRef_ilus(){
    var refSelect1 = document.getElementById("ref_ilus").value;

    if (refSelect1 == "Não"){
        refFoto_ilus.style.display = "none"; 
    }else{
        refFoto_ilus.style.display = "block";
    }
}

function sobreNos(){
    window.location.href = "/sobreNos";
}
function login(){
    window.location.href = "/login";
}
function cadastro(){
    window.location.href = "/cadastro";
}
function dados(){
    window.location.href = "/dados";
}
function inicio(){
    window.location.href = "/";
}

function fazerLogin(){
  var login = document.getElementById("userLog").value;
  var senha = document.getElementById("senhaLog").value;
  var validaLogin = "";
  var validaSenha = "";

  if(login == ""){
    alert("Você deixou o campo do login em branco!");
    return false;
  }else if(senha == ""){
    alert("Você deixou o campo da senha em branco!");
    return false;
  }else if(!(login == "user")){
    alert("Usuário incorreto!");
}else if(!(senha == "1234")){
    alert("Senha incorreta!");
}
}

function validaCadastro(){
    var nome = document.getElementById("nome").value;
    var user = document.getElementById("user").value;
    var senha = document.getElementById("senha").value;
    var confSenha = document.getElementById("confSenha").value;
    var email = document.getElementById("email").value;
    var confEmail = document.getElementById("confEmail").value;
    var telefone = document.getElementById("telefone").value;

    if(nome == "" || user =="" || senha == "" || email == "" || telefone ==""){
        alert("Você não pode deixar campos vazios");
        return false;
    }else if(senha != confSenha){
        alert("As senhas não coincidem");
        return false;
    }else if(email != confEmail){
        alert("Os emails não coincidem");
        return false;
    }else{
        return true;
    }
}