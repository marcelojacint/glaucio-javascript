let salario = 1000;
let ano = 1996;
let percentual = 0.15; // 15% fixo

while (ano <= 2025) {
    salario += salario * percentual;
    ano++;
}

console.log(`Salário atual em 2025 com aumento fixo de 15% ao ano: R$ ${salario.toFixed(2)}`);
