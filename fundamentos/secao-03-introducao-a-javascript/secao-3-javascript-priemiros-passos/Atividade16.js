let custoDoProduto = 400
let valorDeVenda = 500

if ( custoDoProduto >= 0 && valorDeVenda >= 0) {
    let totalCustoDoProduto = custoDoProduto * 1.2
    let lucro = valorDeVenda - totalCustoDoProduto
    let lucroTotal = lucro * 1000
    console.log(lucroTotal)
} 

else {
    console.log("Erro, Valor não pode ser negativo")
}
