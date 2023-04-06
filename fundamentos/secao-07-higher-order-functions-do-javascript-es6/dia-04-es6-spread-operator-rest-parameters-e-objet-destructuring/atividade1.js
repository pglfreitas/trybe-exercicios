// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Laranja', 'Tomate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Churros', 'Churrasco', 'Pizza'];

const fruitSalad = (fruit, additional) => {
	const tudo = [...fruit, ...additional]
	return tudo
  
};

console.log(fruitSalad(specialFruit, additionalItens));