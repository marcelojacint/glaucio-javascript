function calcularCirculo() {
    let raio = parseFloat(prompt("Informe o raio do círculo:"));

    if (isNaN(raio) || raio <= 0) {
        console.log("Por favor, insira um raio válido e positivo.");
        return;
    }

    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área do círculo: ${area.toFixed(2)}`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}

calcularCirculo();
