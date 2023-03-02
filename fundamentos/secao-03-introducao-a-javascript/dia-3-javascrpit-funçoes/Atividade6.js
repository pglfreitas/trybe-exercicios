let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removerCliente(cliente) { 
    let clienteExiste = false
    if (typeof cliente === "string") {   
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
              clientesTrybeBank.splice(index, 1);
              clienteExiste = true;
            return "Cliente removido"}}

    }
    else if(typeof cliente !== "string"){
        return "Erro parâmetro não e uma string"
    }

    if(clienteExiste === false){
        return "Cliente não existe dentro do array"
    }
}

console.log(removerCliente("Jonas"))
console.log(removerCliente("Gus"))
console.log(clientesTrybeBank)
