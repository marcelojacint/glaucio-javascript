function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9; 
    }
    return valorTotal;
}

function exibirResumo(precoUnitario, quantidade) {
    let valorTotal = calcularTotal(precoUnitario, quantidade);
    let valorComDesconto = aplicarDesconto(valorTotal);
    if (valorTotal > 100) {
        console.log("Resumo da Compra:");
        console.log(`Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}`);
        console.log(`Valor final com desconto: R$ ${valorComDesconto.toFixed(2)}`);
    }else{
        console.log("Resumo da Compra:");
        console.log(`Valor total sem desconto: R$ ${valorTotal.toFixed(2)}`);
    }
    
}

let preco = parseFloat(prompt("Digite o preço unitário do produto:"));
let quantidade = parseInt(prompt("Digite a quantidade comprada:"));

exibirResumo(preco, quantidade);

