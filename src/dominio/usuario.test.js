import Usuario from './usuario.js';
import Lista from './lista.js';
import Producto from './producto.js';
import Proveedor from './proveedor.js';

test('creación de usuario', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	expect(nuevoUsuario.nombre).toBe('NombreUsuario');
	expect(nuevoUsuario.email).toBe('NombreUsuario@gmail.com');
	expect(nuevoUsuario.listaPrincipal).toStrictEqual([]);
	nuevoUsuario.añadirListaAListaPrincipal('nuevaLista');
	expect(nuevoUsuario.listaPrincipal.length).toBe(1);
});

test('obtener usuario', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.setEmail('nuevoEmail@gmail.com');
	nuevoUsuario.setNombre('usuario');
	nuevoUsuario.añadirListaAListaPrincipal('listaUsuario1');
	nuevoUsuario.añadirListaAListaPrincipal('listaUsuario2');
	const lista1 = new Lista('listaUsuario1');
	const lista2 = new Lista('listaUsuario2');
	const usuarioEsperado = {nombre: 'usuario', email: 'nuevoEmail@gmail.com',
		listaPrincipal: [lista1, lista2]};
	expect(nuevoUsuario.getUsuario()).toStrictEqual(usuarioEsperado);
});

test('obtener nombre de usuario', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	expect(nuevoUsuario.getNombre()).toBe('NombreUsuario');
});

test('cambiar nombre de usuario', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.setNombre('OtroNombre');
	expect(nuevoUsuario.getNombre()).toBe('OtroNombre');
});

test('obtener email de usuario', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	expect(nuevoUsuario.getEmail()).toBe('NombreUsuario@gmail.com');
});

test('cambiar email de usuario', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.setEmail('NuevoEmail@gmail.com');
	expect(nuevoUsuario.getEmail()).toBe('NuevoEmail@gmail.com');
});

test('obtener nombre de lista existente', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista1');
	expect(nuevoUsuario.getListaEnListaPrincipal('lista1').nombre).toBe('lista1');
});

test('obtener nombre de lista no existente', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista2');
	expect(() => { nuevoUsuario.getListaEnListaPrincipal('lista1'); }).toThrow('No se encuentra la lista de nombre lista1 dentro de tus listas.');
});


test('obtener lista existente', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista1');
	const lista = nuevoUsuario.getListaEnListaPrincipal('lista1');
	const listaEsperada = new Lista('lista1');
	expect(lista).toStrictEqual(listaEsperada);
});

test('obtener lista existente con una lista de productos', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('Verdulista');
	const lista = nuevoUsuario.getListaEnListaPrincipal('Verdulista');
	const producto1 = new Producto('producto1', 'Es una manzana verde', false, 'Verano');
	const producto2 = new Producto('producto2', 'Si, los tomates son frutas', false, 'Primavera');
	const proveedor1 = new Proveedor('Devoto');
	const proveedor2 = new Proveedor('Tienda Inglesa');
	proveedor1.addProducto(producto1, 40, 200);
	proveedor1.addProducto(producto2, 50, 300);
	proveedor2.addProducto(producto1, 20, 500);
	lista.setProducto(producto1, 2, proveedor2);
	lista.setProducto(producto2, 5, proveedor1);
	expect(lista.productos.length).toBe(2);
	expect(nuevoUsuario.listaPrincipal.length).toBe(1);
	expect(nuevoUsuario.listaPrincipal.find(l => l.nombre === lista.nombre)).toStrictEqual(lista);
});


test('obtener lista no existente', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista2');  
	expect(() => { nuevoUsuario.getListaEnListaPrincipal('lista1'); }).toThrow('No se encuentra la lista de nombre lista1 dentro de tus listas.');
});


test('eliminar lista de nombre existente', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista1');
	nuevoUsuario.eliminarListaDeListaPrincipal('lista1');
	expect(() => { nuevoUsuario.getListaEnListaPrincipal('lista1'); }).toThrow('No se encuentra la lista de nombre lista1 dentro de tus listas.');
});

test('eliminar lista de nombre no existente', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista2');
	expect(() => { nuevoUsuario.eliminarListaDeListaPrincipal('lista1'); }).toThrow('No tienes listas con el nombre lista1');
});

test('obtener lista principal de un usuario', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista1');
	nuevoUsuario.añadirListaAListaPrincipal('lista2');
	const lista1 = nuevoUsuario.getListaEnListaPrincipal('lista1');
	const lista2 = nuevoUsuario.getListaEnListaPrincipal('lista2');
	const lista = [lista1, lista2];
	expect(nuevoUsuario.getListaPrincipal()).toStrictEqual(lista);
});

test('setear lista principal de un usuario', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	const lista1 = new Lista('lista1');
	const lista2 = new Lista('lista2');
	const lista = [lista1, lista2];
	nuevoUsuario.setListaPrincipal(lista);
	expect(nuevoUsuario.getListaPrincipal()).toStrictEqual(lista);
});

test('añadir lista ya existente a lista principal', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista1');
	expect(() => { nuevoUsuario.añadirListaAListaPrincipal('lista1'); }).toThrow('Ya tienes una lista con nombre lista1 por favor elige otro.');
});


test('Chequea si existe lista', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista1');
	expect(nuevoUsuario.tieneLista('lista1')).toBe(true);
});

test('Cambia el nombre de la lista', () => {
	const nuevoUsuario = new Usuario('NombreUsuario','NombreUsuario@gmail.com');
	nuevoUsuario.añadirListaAListaPrincipal('lista1');
	const lista = nuevoUsuario.getListaEnListaPrincipal('lista1');
	nuevoUsuario.añadirListaAListaPrincipal('lista2');
	nuevoUsuario.cambiarNombreLista('lista1', 'nuevalista');
	expect(lista.nombre).toBe('nuevalista');
	expect(() => nuevoUsuario.cambiarNombreLista('nuevalista', 'lista2')).toThrow('Ya existe una lista con el nombre lista2');
	expect(() => nuevoUsuario.cambiarNombreLista('lista3', 'lista2')).toThrow('No tienes listas con el nombre lista3');
});