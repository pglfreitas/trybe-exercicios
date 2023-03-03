let student = {

}

let novaChave = "name"
let nome = "Pedro"

function addProperty(object, key, value) {
    object[key] = value;
  }

addProperty(student, novaChave, nome)


novaChave = "eMail"
let eMail = "emailTeste"

addProperty(student, novaChave, eMail )


novaChave = "telefone"
let telefone = "telefoneTeste"

addProperty(student, novaChave, telefone )

console.log(student)