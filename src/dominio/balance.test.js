const sist = require("./sistema");

test('Creacion y obtencion de datos de un gasto', () => {
	const tipo = false;
	const sist = new sistema();
	expect(sist.getBalance()).toBe(0);
	expect(sist.getGasto()).toBe(0);
	expect(sist.getIngreso()).toBe(0);
	expect(sist.getTransacciones()).toBe(null);
});

test('Se modifica el balance', () => {
	const sist = new sistema();
    sist.setBalance(500);
	expect(sist.getBalance()).toBe(500);
});

test('Se modifica el gasto', () => {
	const sist = new sistema();
    sist.setGasto(300);
	expect(sist.getGasto()).toBe(-300);
});

test('Se modifica el ingreso', () => {
	const sist = new sistema();
    sist.setIngreso(5000);
	expect(sist.getIngreso()).toBe(5000);
});
