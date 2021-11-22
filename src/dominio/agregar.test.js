const sist = require("./transaccion");
//import transaccion from './transaccion.js';

test('Creacion y obtencion de datos de un gasto', () => {
	const tipo = false;
	const tr = new transaccion('Sandwich', tipo, 130, 'Alimento');
	expect(tr.getNombre()).toBe('Sandwich');
	expect(tr.getTipo()).toBe(false);
	expect(tr.getMonto()).toBe(130);
	expect(tr.getCategoria()).toBe('Alimento');
});

test('Creacion y obtencion de datos de otro gasto', () => {
	const tipo = false;
	const tr = new transaccion('Cerrajero', tipo, 1000, 'Seguridad');
	expect(tr.getNombre()).toBe('Cerrajero');
	expect(tr.getTipo()).toBe(false);
	expect(tr.getMonto()).toBe(1000);
	expect(tr.getCategoria()).toBe('Seguridad');
});

test('Creacion y obtencion de datos de un ingreso', () => {
	const tipo = true;
	const tr = new transaccion('Me paga mi jefe', tipo, 15000, 'Sueldo');
	expect(tr.getNombre()).toBe('Me paga mi jefe');
	expect(tr.getTipo()).toBe(true);
	expect(tr.getMonto()).toBe(15000);
	expect(tr.getCategoria()).toBe('Sueldo');
});

test('Creacion y obtencion de datos de otro ingreso', () => {
	const tipo = true;
	const tr = new transaccion('Me paga pagina web', tipo, 20000, 'Inversion');
	expect(tr.getNombre()).toBe('Me paga pagina web');
	expect(tr.getTipo()).toBe(true);
	expect(tr.getMonto()).toBe(20000);
	expect(tr.getCategoria()).toBe('Inversion');
});
