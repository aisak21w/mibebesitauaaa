let menu_responsive=
document.querySelector(".checkbtn");
menu_responsive.onclick = function() {
    navBar = document.querySelector(".navbar")
    navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario(){
    let warnings ="";
    let valido = true;
    parrafo.innerHTML="";

    if (nombre.value.length < 2){
    warnings +=  `El nombre debe contener mas de 2 caracteres`
    valido = false;
}


if(!valido){
    parrafo.innerHTML = warnings;
    
} else{
    parrafo.innerHTML= "Sent"
}
return valido;
}

form.addEventListener("submit", (e) =>{
    if (validarFormulario()){
        formulario.submit();
    } else{
        e.preventDefault();
    }
});