let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionarCliente(cliente) { 
    if (typeof cliente === "string") {
        clientesTrybeBank.push(cliente)
        return "Cliente adicionado"

    }
    else {
        return "Erro parâmetro não e uma string"
    }
}

console.log(adicionarCliente("Jonas"))
console.log(clientesTrybeBank)


