const myFizzBuzz = require('./atividade2.js')

describe('testa a função myFizzBuzz', () => {
	it("deve retornar a palavra corretas", () => {
	  expect(myFizzBuzz(30)).toEqual("fizzbuzz")
	  expect(myFizzBuzz(3)).toEqual("fizz")
	  expect(myFizzBuzz(5)).toEqual("buzz")
	  expect(myFizzBuzz(2)).toEqual(2)
	  expect(myFizzBuzz("auau")).toEqual(false)
	});
  });