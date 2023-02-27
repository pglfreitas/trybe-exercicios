let peçaDeXadrez = "torre"

switch(peçaDeXadrez.toLowerCase()) {
    case "rei":
      console.log('Rei-> Uma casa para qualquer direção.')
      break
    case "bispo":
      console.log("Bispo-> Diagonal.")
      break
    case "rainha":
      console.log("Rainha-> Diagonal, horizontal e vertical.")
      break
    case "cavalo":
      console.log("Cavalo -> Movimento em formato de L pode pular sobre as peças.")
      break
    case "torre":
      console.log("Torre -> Horizontal e vertical.")
      break;
    case "peão":
      console.log("Peão -> Duas casa para frente no primeiro movimento e uma para frente no resto do jogo.")
      break
    default:
      console.log("Erro, peça inválida!")
      break
  };