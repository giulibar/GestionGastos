import Lista from './lista.js';
import Producto from './producto.js';
import Proveedor from './proveedor.js';

test('Creacion de una Lista nueva', () => {
	const listaCompras = new Lista('Compras Casa');
	expect(listaCompras.nombre).toBe('Compras Casa');
	expect(listaCompras.productos).toStrictEqual([]);
	expect(listaCompras.total).toStrictEqual(0);
});

test('Agrega un producto a una lista creada', () => {
	const listaCompras = new Lista('Compras Casa');
	const Apio = new Producto('Apio de hoja', 'Verdura apio', true, 'Todo el año');
	const Devoto = new Proveedor('Devoto');
	Devoto.addProducto(Apio, 20, 20);
	listaCompras.setProducto(Apio,5,Devoto);
	expect(listaCompras.total).toStrictEqual(100);
	expect(listaCompras.productos.length).toBe(1);
});

test('Remover un producto de una lista creada', () => {
	const listaCompras = new Lista('Compras Casa');
	const Apio = new Producto('Apio de hoja', 'Verdura apio', true, 'Todo el año');
	const Devoto = new Proveedor('Devoto');
	Devoto.addProducto(Apio, 20, 20);
	listaCompras.setProducto(Apio,5,Devoto);
	listaCompras.removeProduct('Apio de hoja', 5, 'Devoto');
	expect(listaCompras.productos).toStrictEqual([]);
});

test('Reducir cantidad de un producto de una lista', () => {
	const listaCompras = new Lista('Compras Casa');
	const Apio = new Producto('Apio de hoja', 'Verdura apio', true, 'Todo el año');
	const Devoto = new Proveedor('Devoto');
	Devoto.addProducto(Apio, 20, 20);
	listaCompras.setProducto(Apio,5,Devoto);
	listaCompras.removeProduct('Apio de hoja', 2, 'Devoto');
	expect(listaCompras.productos.find(p => p.producto.nombre === 'Apio de hoja').cantidad).toBe(3);
});

test('Remover un producto de una lista que no tiene productos', () => {
	const listaCompras = new Lista('Compras Casa');
	expect(() => { listaCompras.removeProduct('Apio de hoja', 5, 'Devoto'); }).toThrow('No se puede remover un producto que no pertenece a la lista.');
});

test('Agrega un producto con cantidad, que excede el stock, a una lista', () => {
	const listaCompras = new Lista('Compras Casa');
	const Apio = new Producto('Apio de hoja', 'Verdura apio', true, 'Todo el año');
	const Devoto = new Proveedor('Devoto');
	Devoto.addProducto(Apio, 20, 2);
	expect(() => { listaCompras.setProducto(Apio,5,Devoto); }).toThrow('No hay suficiente stock para agregar el producto a la lista.');
});

test('Agrega un producto que un proveedor no provee', () => {
	const listaCompras = new Lista('Compras Casa');
	const Apio = new Producto('Apio de hoja', 'Verdura apio', true, 'Todo el año');
	const Devoto = new Proveedor('Devoto');
	expect(() => { listaCompras.setProducto(Apio,5,Devoto);}).toThrow('Este proveedor no provee ese producto.');
});

test('Agrega un producto que ya pertenece a la lista', () => {
	const listaCompras = new Lista('Compras Casa');
	const Apio = new Producto('Apio de hoja', 'Verdura apio', true, 'Todo el año');
	const Devoto = new Proveedor('Devoto');
	Devoto.addProducto(Apio, 20, 20);
	listaCompras.setProducto(Apio,5,Devoto);
	listaCompras.setProducto(Apio,5,Devoto);
	expect(listaCompras.total).toBe(200);
	expect(listaCompras.productos.find(p => p.producto.nombre === 'Apio de hoja').cantidad).toBe(10);
});

test('Obtener los producto de la lista', () => {
	const listaCompras = new Lista('Compras Casa');
	const Apio = new Producto('Apio de hoja', 'Verdura apio', true, 'Todo el año');
	const Banana = new Producto('Banana', 'Banana amarilla', false, 'Todo el año');
	const Devoto = new Proveedor('Devoto');
	Devoto.addProducto(Apio, 20, 20);
	Devoto.addProducto(Banana, 10, 20);
	listaCompras.setProducto(Apio,5,Devoto);
	listaCompras.setProducto(Banana,5,Devoto);
	expect(listaCompras.getProductos().length).toBe(2);
});

test('Calcula el nuevo total de la lista', () => {
	const listaCompras = new Lista('Compras Casa');
	const Apio = new Producto('Apio de hoja', 'Verdura apio', true, 'Todo el año');
	const Banana = new Producto('Banana', 'Banana amarilla', false, 'Todo el año');
	const Devoto = new Proveedor('Devoto');
	Devoto.addProducto(Apio, 20, 20);
	Devoto.addProducto(Banana, 20, 20);
	listaCompras.setProducto(Apio,5,Devoto);
	listaCompras.removeProduct('Apio de hoja', 5, 'Devoto');
	expect(listaCompras.total).toBe(0);
	listaCompras.setProducto(Apio,5,Devoto);
	listaCompras.total = 2;
	listaCompras.removeProduct('Apio de hoja', 5, 'Devoto');
	expect(listaCompras.total).toBe(0);
	listaCompras.setProducto(Apio,5,Devoto);
	listaCompras.setProducto(Banana,5,Devoto);
	expect(listaCompras.total).toBe(200);
	listaCompras.removeProduct('Apio de hoja', 5, 'Devoto');
	expect(listaCompras.total).toBe(100);
	listaCompras.total = 2;
	listaCompras.removeProduct('Banana', 2, 'Devoto');
});