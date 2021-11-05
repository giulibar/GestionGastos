import Producto from '../../dominio/producto.js';
import Proveedor from '../../dominio/proveedor.js';

export const getImagenProd = (nombreProd) => {
	switch (nombreProd) {
	case 'Banana':
		return '../resources/images/platanos.png';
	case 'Manzana':
		return '../resources/images/manzana.png';
	case 'Frutilla':
		return '../resources/images/fresa.png';
	case 'Pera':
		return '../resources/images/pera.png';
	case 'Melon':
		return '../resources/images/melon.png';
	case 'Apio':
		return '../resources/images/apio.png';
	case 'Lechuga':
		return '../resources/images/lechuga.png';
	case 'Berenjena':
		return '../resources/images/berenjena.png';
	case 'Zanahoria':
		return '../resources/images/zanahoria.png';
	case 'Ajo':
		return '../resources/images/ajo.png';
	case 'Choclo':
		return '../resources/images/maiz.png';
	case 'Tomate':
		return '../resources/images/tomate.png';
	default:
		return;
	}
};

export const cleanNode = (node) => {
	node.innerHTML = null;
};

export const createData = (usuario) => {
	usuario.añadirListaAListaPrincipal('Compras Semana');
	usuario.añadirListaAListaPrincipal('Compras Asado Sabado');
	usuario.añadirListaAListaPrincipal('Compras Casa');

	const listaSemana = usuario.getListaEnListaPrincipal('Compras Semana');
	const listaCasa = usuario.getListaEnListaPrincipal('Compras Casa');

	const Banana = new Producto('Banana', 'Banana Amarilla.', false, 'Verano');
	const Manzana = new Producto('Manzana', 'Manzana roja excelente calidad.', false, 'Invierno');
	const Frutilla = new Producto('Frutilla', 'Frutilla Fragaria deliciosa.', false, 'Primavera');
	const Pera = new Producto('Pera', 'Pera de agua, super dulce.', false, 'Verano');
	const Melon = new Producto('Melon', 'Melon Cantaloup de pulpa anaranjada', false, 'Invierno');
	const Apio = new Producto('Apio', 'Apio en rama fresco.', true, 'Primavera');
	const Lechuga = new Producto('Lechuga', 'Lechuga crespa verde.', true, 'Verano');
	const Zanahoria = new Producto('Zanahoria', 'Zanahoria variedad Danvers.', true, 'Invierno');
	const Ajo = new Producto('Ajo', 'Ajo blanco por una cabeza.', true, 'Primavera');
	const Berenjena = new Producto('Berenjena', 'Variedad Berenjena tipo listada mediana.', true, 'Primavera');
	const Choclo = new Producto('Choclo', 'Choclo dulce de la mejor calidad.', true, 'Invierno');
	const Tomate = new Producto('Tomate', 'Tomate americano extra grande.', false, 'Primavera');


	const productos = [];
	productos.push(Banana);
	productos.push(Manzana);
	productos.push(Frutilla);
	productos.push(Pera);
	productos.push(Melon);
	productos.push(Apio);
	productos.push(Lechuga);
	productos.push(Zanahoria);
	productos.push(Ajo);
	productos.push(Berenjena);
	productos.push(Choclo);
	productos.push(Tomate);

	const Devoto = new Proveedor('Devoto');
	const TInglesa = new Proveedor('Tienda Inglesa');
	const Macro = new Proveedor('Macro');
	const UNatural = new Proveedor('Uruguay Natural');
	const Disco = new Proveedor('Disco');

	const proveedores = [];
	proveedores.push(Devoto);
	proveedores.push(TInglesa);
	proveedores.push(Macro);
	proveedores.push(UNatural);
	proveedores.push(Disco);

	Devoto.addProducto(Banana, 60, 60);
	Devoto.addProducto(Manzana, 45, 70);
	Devoto.addProducto(Frutilla, 20, 50);
	Devoto.addProducto(Melon, 70, 30);
	Devoto.addProducto(Zanahoria,45,100);
	TInglesa.addProducto(Choclo, 34,66);
	TInglesa.addProducto(Manzana, 50, 20);
	TInglesa.addProducto(Pera, 55, 23);
	TInglesa.addProducto(Apio, 37, 34);
	Macro.addProducto(Berenjena, 47, 59);
	Macro.addProducto(Manzana, 23, 38);
	Macro.addProducto(Frutilla,78, 58);
	Macro.addProducto(Ajo,9,47);
	Macro.addProducto(Tomate, 60,78);
	UNatural.addProducto(Banana, 40, 65);
	UNatural.addProducto(Frutilla, 70, 54);
	UNatural.addProducto(Tomate, 37, 31);
	UNatural.addProducto(Choclo, 40, 67);
	UNatural.addProducto(Ajo,12,54);
	Disco.addProducto(Berenjena, 34, 45);
	Disco.addProducto(Frutilla, 87, 23);
	Disco.addProducto(Pera, 56, 76);
	Disco.addProducto(Melon, 48, 34);
	Disco.addProducto(Lechuga, 23, 45);

	listaCasa.setProducto(Apio, 5, TInglesa);
	listaCasa.setProducto(Berenjena, 2, Disco);
	listaCasa.setProducto(Manzana, 7, Macro);


	listaSemana.setProducto(Choclo, 3, UNatural);
	listaSemana.setProducto(Frutilla, 8, Disco);
	listaSemana.setProducto(Pera, 2, TInglesa);

	return { productos: productos, proveedores: proveedores };
};