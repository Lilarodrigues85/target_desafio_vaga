// Distância entre Ribeirão Preto e Franca em km
const distance = 100;

// Velocidade do carro em km/h
const carSpeed = 110;

// Velocidade do caminhão em km/h
const truckSpeed = 80;

// Tempo que o caminhão leva para passar em cada pedágio em minutos
const tollTime = 5;

// Converter o tempo do caminhão em horas para facilitar os cálculos
const truckTollTime = tollTime / 60;

// Calcular a velocidade relativa dos veículos
const relativeSpeed = carSpeed + truckSpeed;

// Calcular o tempo que levará para os veículos se encontrarem
const time = distance / relativeSpeed;

// Calcular a distância percorrida pelo carro até o encontro
const carDistance = carSpeed * time;

// Calcular a distância percorrida pelo caminhão até o encontro
// Levando em conta que o caminhão leva mais tempo para passar em cada pedágio
const truckDistance = (truckSpeed * time) + (2 * truckTollTime * truckSpeed);

// Verificar qual veículo está mais próximo de Ribeirão Preto
if (carDistance < truckDistance) {
  console.log("O carro está mais próximo de Ribeirão Preto.");
} else {
  console.log("O caminhão está mais próximo de Ribeirão Preto.");
}
