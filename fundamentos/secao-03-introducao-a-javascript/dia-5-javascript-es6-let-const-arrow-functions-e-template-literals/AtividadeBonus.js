function substituaX(nome) {
    const frase = "Tryber x aqui!"
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
      if (fraseArray[index] === "x") {
        fraseArray[index] = nome;
      }
    }  
    return fraseArray.join(" ")
  };
  


console.log(substituaX("numberto"))

function minhasSkills(function1) {
    const skills = ["HTML", "CSS", "JavaScript"];
    let frase2 = (`${function1}
    Minhas três principais habilidades são: `)
    for (let index = 0; index < skills.length; index += 1) {
        frase2 = `${frase2}
        . ${skills[index]}`
    }
    return frase2
}

console.log(minhasSkills(substituaX("Numberto")))