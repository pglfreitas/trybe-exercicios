  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = "Luna"
  pessoa.idade = 19

  
  console.log(`nome: ${pessoa.nome}`);
  console.log(`idade: ${pessoa.idade}`);