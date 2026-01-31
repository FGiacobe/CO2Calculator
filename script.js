// Fatores de emissão de CO2 por meio de transporte (kg CO2 por km)
const emissionFactors = {
    bicycle: 0,           // Bicicleta não emite CO2
    motorcycle: 0.103,    // Motocicleta: ~103g CO2/km
    car: 0.192,          // Carro médio: ~192g CO2/km
    bus: 0.089,          // Ônibus: ~89g CO2/km (por passageiro)
    truck: 0.960         // Caminhão: ~960g CO2/km
};

// Nomes dos meios de transporte em português
const transportNames = {
    bicycle: 'Bicicleta',
    motorcycle: 'Motocicleta',
    car: 'Carro',
    bus: 'Ônibus',
    truck: 'Caminhão'
};

// Dicas ambientais por meio de transporte
const environmentalTips = {
    bicycle: '🌟 Excelente escolha! A bicicleta não emite CO2 e é ótima para sua saúde!',
    motorcycle: '💡 Considere usar transporte público ou bicicleta para reduzir suas emissões.',
    car: '💡 Que tal fazer carona solidária ou usar transporte público? Você pode reduzir significativamente suas emissões!',
    bus: '👍 Boa escolha! O ônibus é uma opção mais sustentável que o carro individual.',
    truck: '⚠️ Caminhões emitem muito CO2. Para cargas, considere otimizar rotas e carga completa.'
};

// Função para calcular emissões de CO2
function calculateCO2(distance, transport) {
    const factor = emissionFactors[transport];
    const emission = distance * factor;
    return {
        emission: emission.toFixed(2),
        factor: factor.toFixed(3),
        distance: distance.toFixed(1),
        transportName: transportNames[transport],
        tip: environmentalTips[transport]
    };
}

// Função para exibir resultado
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    const emissionValue = document.getElementById('emissionValue');
    const resultDistance = document.getElementById('resultDistance');
    const resultTransport = document.getElementById('resultTransport');
    const resultFactor = document.getElementById('resultFactor');
    const environmentalTip = document.getElementById('environmentalTip');

    emissionValue.textContent = result.emission;
    resultDistance.textContent = result.distance;
    resultTransport.textContent = result.transportName;
    resultFactor.textContent = result.factor;
    environmentalTip.textContent = result.tip;

    resultDiv.classList.remove('hidden');
    
    // Scroll suave até o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Event listener para o formulário
document.getElementById('co2Form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const transport = document.getElementById('transport').value;
    
    const result = calculateCO2(distance, transport);
    displayResult(result);
});

// Limpar resultado quando mudar os inputs
document.getElementById('distance').addEventListener('input', function() {
    const resultDiv = document.getElementById('result');
    if (!resultDiv.classList.contains('hidden')) {
        resultDiv.classList.add('hidden');
    }
});

document.getElementById('transport').addEventListener('change', function() {
    const resultDiv = document.getElementById('result');
    if (!resultDiv.classList.contains('hidden')) {
        resultDiv.classList.add('hidden');
    }
});
