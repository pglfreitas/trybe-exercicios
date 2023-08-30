const readline = require('readline-sync');

// const pesoKg = 95
// const alturaCm = 185;

function handleIMC(peso, altura) {
  console.log(`peso: ${peso}, altura: ${altura}`);

  const alturaInMeters = altura / 100;
  const alturaSquared = alturaInMeters ** 2;

  const imc = peso / alturaSquared;

  return imc;
}

const BMI_MAX_AND_MIN = {
	'Abaixo do peso': {
	  minBMI: 0,
	  maxBMI: 18.4,
	},
	'Peso normal': {
	  minBMI: 18.5,
	  maxBMI: 24.9,
	},
	'Acima do peso': {
	  minBMI: 25,
	  maxBMI: 29.9,
	},
	'Obeso Classe I': {
	  minBMI: 30.0,
	  maxBMI: 34.9,
	},
	'Obeso classe II': {
	  minBMI: 35,
	  maxBMI: 39.9,
	},
	'Obeso classe III': {
	  minBMI: 40,
	  maxBMI: 100,
	},
  };
  
function handleResultadoIMC(imc) {
	const statuses = Object.keys(BMI_MAX_AND_MIN); 
  
	const resultFind = statuses.find((status) => {
	  const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; 
	  return imc >= minBMI && imc <= maxBMI;
	});
  
	return resultFind;
  }

function main() {
//   const imc = handleIMC(pesoKg, alturaCm);

  const peso = readline.questionFloat('Qual e seu peso? (kg) ');
  const altura = readline.questionInt('Qual e sua altura? (cm) ');

  const imc = handleIMC(peso, altura);
  const resultadoIMC = handleResultadoIMC(imc);

  console.log(`imc: ${imc.toFixed(2)}`);
  console.log(resultadoIMC)

//   if (imc < 18.5) {
// 	console.log('Status: Underweight (thin)');
// 	return;
//   }

//   if (imc >= 18.5 && imc < 25) {
// 	console.log('Peso normal');
// 	return;
//   }

//   if (imc >= 25 && imc < 30) {
// 	console.log('Acima do peso');
// 	return;
//   }

//   if (imc >= 30 && imc < 35) {
// 	console.log('Obesidade de primeiro grau');
// 	return;
//   }

//   if (imc >= 35 && imc < 40) {
// 	console.log('Obesidade de segundo grau');
// 	return;
//   }

//   console.log('Obesidade de terceiro e quarto grau');
}

main();