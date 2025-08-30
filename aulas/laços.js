let contador = 1;

while (contador <= 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

let diasemana = 1;
let nomedia;

switch (diasemana) {
    case 1:
        nomedia = "Domingo";
        break;
    case 2:
        nomedia = "Segunda-feira";
        break;
    case 3:
        nomedia = "Terça-feira";
        break;  
    case 4:
        nomedia = "Quarta-feira";
        break;
    case 5:
        nomedia = "Quinta-feira";
        break;
    case 6:
        nomedia = "Sexta-feira";
        break;
    case 7:
        nomedia = "Sábado";
        break;
    default:
        nomedia = "Dia inválido";
}
console.log(nomedia);

let contador2 = 1;
do {
    console.log(`Contador2: ${contador2}`);
    contador2++;
} while (contador2 <= 5);

for(let i = 1; i <= 5; i++) {
    console.log(`i: ${i}`);
}