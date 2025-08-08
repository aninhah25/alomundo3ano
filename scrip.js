function insirirNome(){
    let nomeUsuario =prompt("Qual é o seu nome")
    let elemento =document.querySelector ("#nome-usuario");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}

 const lista =document.querySelector('#lista');
 lista.textContent =linguagens(0);
 lista.textContent =linguagens(1);
 lista.textContent =linguagens(2);
 let aluno1 ={
    nome: 'Ana Paula',
    idade: 17,
    anoLetivo: 'Ensino Médio',
    meteriasFavoritas:['Educação Física', 'Programação', 'Biologia',]

    console.log(aluno1.'Ana Paula');
console.log(aluno1.17);
console.log(aluno1.'Educação Física', 'Programação', 'Biologia');
console.log(aluno1.'Educação Física', 'Programação', 'Biologia'[1]);

const objeto = document.querySelector('#aluno');
objeto.textContent = aluno1.'Ana Paula';
objeto.textContent = aluno1.17;
objeto.textContent = aluno1.'Educação Física', 'Programação', 'Biologia'[1];
 }