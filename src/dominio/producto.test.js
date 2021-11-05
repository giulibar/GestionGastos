import Producto from './producto.js';

test('Creacion de una Fruta', () => {
	const esVerdura = false;
	const Fruta = new Producto('Banana Cavendish', 'La Banana Cavendish es una de las mas exportadas mundialmente.', esVerdura, 'Todo el año');
	expect(Fruta.nombre).toBe('Banana Cavendish');
	expect(Fruta.descripcion).toBe('La Banana Cavendish es una de las mas exportadas mundialmente.');
	expect(Fruta.isVerdura).toBe(false);
	expect(Fruta.estacion).toBe('Todo el año');
});

test('Creacion de una Verdura', () => {
	const esVerdura = true;
	const Verdura = new Producto('Apio de hoja', 'El apio de hoja tiene un tallo más delgado que Pascal y se cultiva más por sus hojas y semillas aromáticas.', esVerdura, 'Todo el año');
	expect(Verdura.nombre).toBe('Apio de hoja');
	expect(Verdura.descripcion).toBe('El apio de hoja tiene un tallo más delgado que Pascal y se cultiva más por sus hojas y semillas aromáticas.');
	expect(Verdura.isVerdura).toBe(true);
	expect(Verdura.estacion).toBe('Todo el año');
});


test('Obtener datos de un producto', () => {
	const esVerdura = true;
	const Verdura = new Producto('Apio de hoja', 'El apio de hoja tiene un tallo más delgado que Pascal y se cultiva más por sus hojas y semillas aromáticas.', esVerdura, 'Todo el año');
    
	const producto = Verdura.getProducto();
	expect(producto.nombre).toBe('Apio de hoja');
	expect(producto.descripcion).toBe('El apio de hoja tiene un tallo más delgado que Pascal y se cultiva más por sus hojas y semillas aromáticas.');
	expect(producto.isVerdura).toBe(true);
	expect(producto.estacion).toBe('Todo el año');
	expect(producto).toStrictEqual({nombre: 'Apio de hoja', isVerdura: true, descripcion: 'El apio de hoja tiene un tallo más delgado que Pascal y se cultiva más por sus hojas y semillas aromáticas.', estacion: 'Todo el año', proveedores: [] });
});