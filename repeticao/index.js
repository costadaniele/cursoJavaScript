var repete = 0;
while (repete <= 10) {
    document.write(repete, "\n");
    repete ++;
}

for (i = 0; i <= 20; i++) {
    document.write(i, "\n");
}

var inicio = 2;
var fim = 1000;
var todosPares = 'Números pares:';

while (inicio <= fim) {
    todosPares = todosPares + inicio + " ";
    inicio += 2;
}

document.write(todosPares);

for (j = 2; j <= 10; j+=2) {
    document.write(j, "\n");
}