
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
function inicio(){
    window.location.href = "/";
}