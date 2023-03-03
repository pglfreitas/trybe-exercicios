let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    return console.log("olá, " + order["order"]["delivery"]["deliveryPerson"] + ", entrega para: " + order["name"] + ", " + order["phoneNumber"] + ", " + order["address"]["street"] + ", " + order["address"]["number"] + ", " + order["address"]["apartment"]);
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    let novoPedido = order["name"] = "luiz Silva"
    let novoTotal = order["payment"]["total"] = "50"
    let pizzas = Object.keys(order["order"]["pizza"])
    let bebidas = order["order"]["drinks"]["coke"]["type"]

    console.log("Olá " + novoPedido + ", o total do seu pedido de " + pizzas[0] + ", " + pizzas[1] + " e " + bebidas + " é R$ " + novoTotal + ",00.");
   
  }
  
  orderModifier(order);