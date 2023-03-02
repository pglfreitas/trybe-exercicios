let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

    function adicionarNovaChave(objeto, chave, valor) {
        objeto[chave] = valor;
  }

  adicionarNovaChave(lesson2, "turno", "noite")
  console.log(lesson2)

  function listarChaves(objeto) {
  return Object.keys(objeto)
}

  console.log(listarChaves(lesson1));

  function mostrarTamanho(objeto) {
    return Object.keys(objeto).length
  }

  console.log(mostrarTamanho(lesson3))

  function mostrarValores(objeto) {
    return Object.values(objeto)
  }
  console.log(mostrarValores(lesson1));

  let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3
  })

  console.log(allLessons)

  function numeroTotalDeEstudantes(objeto) {
    let total = 0
  
    let chaves = Object.keys(objeto)
      
    for (index in chaves) {
      total += objeto[chaves[index]].numeroEstudantes;
    }
    return total;
  }
  console.log(numeroTotalDeEstudantes(allLessons));

  function getValueByNumber(objeto, numero) {
    return Object.values(objeto)[numero];
  }
  
  console.log(getValueByNumber(lesson1, 1));

  function verifica(objeto, chave, valor) {
    let entries = Object.entries(objeto);
    let igual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) igual = true;
    }
    return igual;
  }
  console.log(verifica(lesson3,"turno","noite"));