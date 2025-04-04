function calcularInvestimento() {
    let capital = parseFloat(prompt("Informe o capital inicial investido (R$):"));
    let taxa = parseFloat(prompt("Informe a taxa de juros mensal (%):"));
    let tempo = parseInt(prompt("Informe o tempo do investimento (em meses):"));

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital <= 0 || taxa < 0 || tempo <= 0) {
        console.log("Por favor, insira valores válidos.");
        return;
    }

    let taxaDecimal = taxa / 100;
    let montante = capital * Math.pow(1 + taxaDecimal, tempo);

    console.log(`Montante após ${tempo} meses: R$ ${montante.toFixed(2)}`);
}

calcularInvestimento();
