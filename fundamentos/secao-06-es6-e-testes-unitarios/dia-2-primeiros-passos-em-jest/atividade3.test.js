const { encode, decode } = require("./atividade3.js");

describe("testa a função encode e decode", () => {
	it("encode é uma função", () => {
		expect(typeof encode).toEqual("function");
	})
	it('decode é uma função', () => {
		expect(typeof decode).toEqual("function");
	})
	it("deve retornar a conversão correta", () => {
	  expect(encode("am")).toEqual("1m")
	  expect(encode("em")).toEqual("2m")
	  expect(encode("im")).toEqual("3m")
	  expect(encode("om")).toEqual("4m")
	  expect(encode("um")).toEqual("5m")
	});
	it("deve reotornar a desconversão correta", () => {
		expect(decode("1m")).toEqual("am")
		expect(decode("2m")).toEqual("em")
		expect(decode("3m")).toEqual("im")
		expect(decode("4m")).toEqual("om")
		expect(decode("5m")).toEqual("um")
	})
	it("checa se o retorno da função encode tem o mesmo número de caracteres", () => {
		expect(encode("jhonson").length).toEqual(7);
	  });
	it("checa se o retorno da função decode tem o mesmo número de caracteres", () => {
		expect(encode("jhonson").length).toEqual(7);
	  });
  });