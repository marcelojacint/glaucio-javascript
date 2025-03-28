const nomes = ["jose", "maria", "joão", "nena", "jurema"];

console.log(nomes[2]);

nomes[0] = "LUAN";
nomes[nomes.length] = "lari";

console.log(nomes);

nomes.pop();

console.log(nomes);
//----------------------------------------------
const numeros =  [2, 4, 6, 8];
const numeros_dobrados = numeros.map(n => n * 2);

console.log("normal: " + numeros)
console.log("dobrado: " + numeros_dobrados);

//------------------------------------------------

const numeros2 = [1, 3, 5, 7, 9];
const maiorQueCinco = numeros2.filter(n => n > 5);
console.log(maiorQueCinco);
