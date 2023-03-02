let word = "tryber";
let palavraAoContrario = "";

for (let index = 0; index < word.length; index += 1) {
  palavraAoContrario += word[word.length - 1 - index];
}

console.log(palavraAoContrario);