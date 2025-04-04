let populacaoA = 80000;
let populacaoB = 200000;
let taxaA = 0.03;
let taxaB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
