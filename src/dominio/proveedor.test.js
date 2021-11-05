import Proveedor from './proveedor.js';
import Producto from './producto.js';

const Prod1 = new Producto('Prod1', 'Prod 1 Descripcion', true, 'Verano');
const Prod2 = new Producto('Prod2', 'Prod 2 Descripcion', true, 'Invierno');
const Prod3 = new Producto('Prod3', 'Prod 3 Descripcion', false, 'Primavera');

const unProveedor = new Proveedor('Proveedor 1');
const unProveedor2 = new Proveedor('Proveedor 2');
const unProveedor3 = new Proveedor('Proveedor 3');

unProveedor2.addProducto(Prod1, 10, 100);
unProveedor2.addProducto(Prod2, 25, 250);
unProveedor2.addProducto(Prod3, 150, 50);

test('creacion de proveedor', () => {
	expect(unProveedor.nombre).toBe('Proveedor 1');
	expect(unProveedor.productos).toStrictEqual([]);
});

test('agregar producto nuevo a proveedor', () => {
	unProveedor3.addProducto(Prod1, 100, 500);
	expect(unProveedor3.productos).toEqual(expect.arrayContaining([
		{ producto: Prod1, precio: 100, stock: 500 }
	]));
});

test('agregar producto existente a proveedor igual precio', () => {
	unProveedor3.addProducto(Prod1, 100, 200);
	expect(unProveedor3.productos).toEqual(expect.arrayContaining([
		{ producto: Prod1, precio: 100, stock: 700 }
	]));
});

test('agregar producto existente a proveedor distinto precio', () => {
	expect(() => { unProveedor3.addProducto(Prod1, 150, 200); }).toThrow('Los precios no coinciden');
});

test('no tiene producto proveedor', () => {
	const tieneProducto = unProveedor.tieneProducto(Prod1);
	expect(tieneProducto).toBe(-1);
});

test('tiene producto proveedor', () => {
	const tieneProducto = unProveedor2.tieneProducto(Prod1);
	expect(tieneProducto).toBeGreaterThan(-1);
});

test('get proveedor', () => {
	const proveedor = unProveedor2.getProveedor();
	expect(proveedor.nombre).toBe(unProveedor2.nombre);
	expect(proveedor.productos).toStrictEqual(unProveedor2.productos);
});

test('get proveedor sin productos', () => {
	expect(unProveedor).toStrictEqual(unProveedor);
});
