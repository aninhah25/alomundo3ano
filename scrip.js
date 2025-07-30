function insirirNome(){
    let nomeUsuario =prompt("Qual é o seu nome")
    let elemento =document.querySelector ("#nome-usuario");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}