const sist = require("./transaccion");
//import transaccion from './transaccion.js';

test('Creacion y obtencion de datos de un pago', () => {
	const tipo = false;
	const tr = new transaccion('Pago', tipo, 100000, 'Educacion');
	expect(tr.getNombre()).toBe('Pago');
	expect(tr.getTipo()).toBe(false);
	expect(tr.getMonto()).toBe(100000);
	expect(tr.getCategoria()).toBe('Alimento');
});

test('Creacion y obtencion de datos de otro gasto', () => {
	const tipo = false;
	const tr = new transaccion('Pago', tipo, 350, 'Transporte');
	expect(tr.getNombre()).toBe('Pago');
	expect(tr.getTipo()).toBe(false);
	expect(tr.getMonto()).toBe(350);
	expect(tr.getCategoria()).toBe('Transporte');
});

test('Creacion y obtencion de datos de un ingreso mas', () => {
	const tipo = false;
	const tr = new transaccion('Pago', tipo, 3000, 'Préstamo');
	expect(tr.getNombre()).toBe('Pago');
	expect(tr.getTipo()).toBe(false);
	expect(tr.getMonto()).toBe(3000);
	expect(tr.getCategoria()).toBe('Préstamo');
});

