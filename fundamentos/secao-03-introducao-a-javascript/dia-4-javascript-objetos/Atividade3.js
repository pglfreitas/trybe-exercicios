let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let modelos in car) {
    console.log(modelos + ":" ,car[modelos])
  }