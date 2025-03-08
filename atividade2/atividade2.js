let alturas = [];
let alturasMasculino = [];

let maiorAltura;
let menorAltura;
let contFeminino = 0;
let soma = 0;
let mediaAlturaMasculino = 0;

for (let cont = 0; cont < 15; cont++) {
    let altura = parseFloat(prompt("escreva a altura: "));
    alturas.push(altura);
    maiorAltura = alturas[0];
    menorAltura = alturas[0];
    let genero = prompt("digite o gênero: ");

    for (let num of alturas) {
        if (num > maiorAltura) {
            maiorAltura = num;
        }
        if (num < menorAltura) {
            menorAltura = num;
        }
    }
   if (genero === "m"){
    alturasMasculino.push(altura)
    let auxAltura = altura;
    soma += altura;

   }
   else if (genero === "f") {
    contFeminino++;
   } 
}
mediaAlturaMasculino = soma / alturasMasculino.length;

console.log("a maior altura é: " + maiorAltura);
console.log("a menor altura é: " + menorAltura);
console.log("a media de altura do gênero masculino é: " + mediaAlturaMasculino);
console.log("a quantidade de gêneros femininos é: " + contFeminino);
