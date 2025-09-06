let frutas = ["Cupuaçu", "Cacau", "Açaí"];
let nomes = new Array("Thalyta", "Geórgia", "Apala");
console.log(frutas[2], nomes[0]);

nomes.push("Elena");

for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

nomes.forEach(nome =>console.log(nome));
// Funciona como o map do Python 
nomes.map(nome => console.log(nome));
// Parece com o list comprehension do Python
nomes.filter(nome => nome.startsWith("T")).forEach(nome => console.log(nome));