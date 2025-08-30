let idade = 17;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
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