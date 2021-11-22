import Sistema from './sistema.js';

test('Creacion y obtencion de datos de un gasto', () => {
	const sist = new Sistema();
	expect(sist.getBalance()).toBe(0);
	expect(sist.getGasto()).toBe(0);
	expect(sist.getIngreso()).toBe(0);
});

test('Se modifica el balance', () => {
	const sist = new Sistema();
    sist.setBalance(500);
	expect(sist.getBalance()).toBe(500);
});

test('Se modifica el gasto', () => {
	const sist = new Sistema();
    sist.setGasto(300);
	expect(sist.getGasto()).toBe(300);
});

test('Se modifica el ingreso', () => {
	const sist = new Sistema();
    sist.setIngreso(5000);
	expect(sist.getIngreso()).toBe(5000);
});

test('Agrego al balance y le saco al balance', () => {
	const sist = new Sistema();
    sist.setBalance(5000);
	sist.setIngreso(5000);
	sist.setBalance(-1000);
	sist.setGasto(1000);
	expect(sist.getBalance()).toBe(4000);
	expect(sist.getIngreso()).toBe(5000);
	expect(sist.getGasto()).toBe(1000);
});
