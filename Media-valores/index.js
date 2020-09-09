var aluno;
aluno = prompt('Digite o seu nome');
document.write('Vamos ver sua média escolar: ', aluno, "\t");

let nota1 = 8;
let nota2 = 7;
let nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
    document.write('APROVADO');
}
else {
    document.write('REPROVADO');
}

document.write('\tSua média escolar é: ', media);