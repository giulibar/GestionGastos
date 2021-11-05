import { MDCTabBar } from '@material/tab-bar';
import { MDCDialog } from '@material/dialog';
import { MDCSnackbar } from '@material/snackbar';
import {MDCSelect} from '@material/select';

import Usuario from '../../dominio/usuario.js';
import { cleanNode, createData, getImagenProd } from './utils';

// Creacion de usuario inicial.
const usuario = new Usuario('Usuario Prueba', 'usuarioprueba@gmail.com');

// Creacion de datos.
const data = createData(usuario);
const productos = data.productos;
const proveedores = data.proveedores;

// Setea valores iniciales para mostrar.
let listaPrincipal = usuario.getListaPrincipal();
let listaActual = usuario.listaPrincipal[0];

// Dialog
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
function showDialog(title, content, callback) {
	const dialogTitle = document.querySelector('#alertDialogTitle');
	const dialogContent = document.querySelector('#alertDialogContent');
	const dialogCallback = document.querySelector('#alertDialogButton');

	cleanNode(dialogContent);

	dialogTitle.innerHTML = title;
	content.style = 'margin-top: 20px;';
	dialogContent.appendChild(content);
	dialogCallback.onclick = callback;
	dialog.open();
}

// Snackbar
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
function showSnackbar(texto) {
	document.querySelector('#snackBarText').innerHTML = texto;
	snackbar.open();
	setTimeout(() => { snackbar.close(); }, 3000);
}

const setListaActual = (lista) => {

	const tituloListaValue = document.createTextNode(lista.nombre);
	document.querySelector('#listaActualHeader .mdc-tab__text-label').innerHTML = null;
	document.querySelector('#listaActualHeader .mdc-tab__text-label').appendChild(tituloListaValue);

	const nombreListaActual = document.createTextNode(lista.nombre);
	document.querySelector('#nombreListaActual').innerHTML = null;
	document.querySelector('#nombreListaActual').appendChild(nombreListaActual);

	// Calcula el total de la lista
	const totalListaActual = document.createTextNode(`Total: ${lista.total}`);
	document.querySelector('#totalLista').innerHTML = null;
	document.querySelector('#totalLista').appendChild(totalListaActual);

	const tablaProductosActuales = document.querySelector('#listaActuales');
	const bodyTableActual = document.createElement('tbody');
	const trOneActual = document.createElement('tr');
	trOneActual.id = 'trOneActual';
	cleanNode(tablaProductosActuales);
	tablaProductosActuales.appendChild(bodyTableActual);
	bodyTableActual.appendChild(trOneActual);

	const createRow = (prod) => {
		const td = document.createElement('td');
		td.style = 'display:inline-block; height: 250px; min-width: 250px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;';
		const div = document.createElement('div');
		div.classList.add('mdc-card', 'hoverCard');
		div.style = 'height: 100%; display: flex; justify-content: center;';
		const img = document.createElement('img');
		img.src = getImagenProd(prod.producto.nombre);
		img.alt = prod.producto.nombre;
		img.style = 'height: 40px; width: 40px; align-self: center; display: flex;';
		const h1 = document.createElement('h1');
		h1.style = 'margin-bottom: 0px;';
		const nombreProd = document.createTextNode(prod.producto.nombre);
		const p = document.createElement('p');
		p.style = 'position: absolute; top: 10px; right: 10px; margin: 0px; font-weight: bold;';
		const cantidadProd = document.createTextNode(`x${prod.cantidad}`);
		const proveedorP = document.createElement('p');
		proveedorP.style = 'margin-top: 5px; margin-bottom: 5px';
		const nombreProveedor = document.createTextNode(prod.proveedor.nombre);
		proveedorP.appendChild(nombreProveedor);
		trOneActual.appendChild(td);
		td.appendChild(div);
		div.appendChild(img);
		div.appendChild(h1);
		div.appendChild(p);
		div.appendChild(proveedorP);
		h1.appendChild(nombreProd);
		cleanNode(p);
		p.appendChild(cantidadProd);

		const icon = document.createElement('i');
		icon.setAttribute('class', 'material-icons mdc-button__icon');
		icon.innerHTML = 'delete_outline';
		icon.classList.add('hoverIcon');
		icon.style.setProperty('position', 'absolute');
		icon.style.setProperty('bottom', '5px');
		icon.style.setProperty('right', '5px');
		icon.onclick = (event) => {
			event.stopPropagation();
			const contenidoEliminar = document.createElement('div');
			const cantidadABorrar = document.createElement('input');
			cantidadABorrar.type = 'number';
			cantidadABorrar.placeholder = 0;
			const labelEliminar = document.createElement('label');
			labelEliminar.innerHTML = 'Seleccione la cantidad a borrar:';
			labelEliminar.style = 'margin-right: 10px;';
			contenidoEliminar.appendChild(labelEliminar);
			contenidoEliminar.appendChild(cantidadABorrar);

			const callback = () => {
				try {
					if (parseInt(cantidadABorrar.value) <= 0 || cantidadABorrar.value === ''){
						showSnackbar('La cantidad a eliminar debe ser mayor a 0.');
					}else{
						listaActual.removeProduct(prod.producto.nombre, cantidadABorrar.value, prod.proveedor.nombre);
						setListaActual(listaActual);
					}
				}catch(error){
					showSnackbar(error.message);
				}
			};

			showDialog('Eliminar Producto', contenidoEliminar, callback);
		};
		div.appendChild(icon);
	};

	lista.productos.map(prod => {
		createRow(prod);
	});
};

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
	document.querySelectorAll('.content').forEach((element, index) => {
		if (element.id === 'listaProductos' || element.id === 'tablaProductos'){
			return;
		}
		if (index === activatedEvent.detail.index) {
			element.classList.remove('sample-content--hidden');
		} else {
			element.classList.add('sample-content--hidden');
		}
	});
});

const dibujarListaProductosTotales = (prods) => {
	const tablaProductos = document.querySelector('#listaProductos');
	cleanNode(tablaProductos);
	const bodyTable = document.createElement('tbody');
	const trOne = document.createElement('tr');
	trOne.id = 'trOne';
	tablaProductos.appendChild(bodyTable);
	bodyTable.appendChild(trOne);

	prods.map(prod => {
		const td = document.createElement('td');
		td.style = 'display:inline-block; height: 250px; min-width: 250px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;';
		const div = document.createElement('div');
		div.classList.add('mdc-card', 'hoverCard');
		div.style = 'height: 100%; display: flex; justify-content: center;';
		const img = document.createElement('img');
		img.src = getImagenProd(prod.nombre);
		img.alt = prod.nombre;
		img.style = 'height: 40px; width: 40px; align-self: center; display: flex;';
		const h1 = document.createElement('h1');
		h1.style = 'margin-bottom: 0px;';
		const nombreProd = document.createTextNode(prod.nombre);
		td.onclick = () => ventanaModal(prod,getImagenProd(prod.nombre));
		trOne.appendChild(td);
		td.appendChild(div);
		div.appendChild(img);
		div.appendChild(h1);
		h1.appendChild(nombreProd);
	});

};

// Lista Principal
function agregarListaAListaPrincipal(nombreLista) {
	let li = document.createElement('li');
	li.setAttribute('class', 'mdc-list-item');
	li.onclick = () => {
		listaActual = usuario.getListaEnListaPrincipal(nombreLista);
		setListaActual(listaActual);
		dibujarListaPrincipal();
	};

	let card = document.createElement('div');
	card.setAttribute('class', 'mdc-card');
	if (listaActual.nombre === nombreLista){
		card.style = 'background-color: #558B2F; color: white;';
	}
	card.innerHTML = nombreLista;

	let actions = document.createElement('div');
	actions.setAttribute('class', 'mdc-card__actions');

	// Delete icon
	let icon = document.createElement('i');
	icon.setAttribute('class', 'material-icons mdc-button__icon');
	icon.innerHTML = 'delete_outline';
	icon.classList.add('hoverIcon');
	icon.style.setProperty('position', 'absolute');
	icon.style.setProperty('top', '5px');
	icon.style.setProperty('right', '5px');
	const callback = () => {
		eliminarListaDeListaPrincipal(nombreLista);
		showSnackbar(`Se elimino ${nombreLista} de las listas`);
	};
	icon.addEventListener('click', function(event) {
		event.stopPropagation();
		let content = document.createElement('p');
		content.innerHTML = `¿Está seguro que desea eliminar la lista ${nombreLista}?` ;
		showDialog('Eliminar Lista', content, callback);
	});

	// Edit icon
	let icon2 = document.createElement('i');
	icon2.setAttribute('class', 'material-icons mdc-button__icon');
	icon2.innerHTML = 'edit';
	icon2.classList.add('hoverIcon');
	icon2.style.setProperty('position', 'absolute');
	icon2.style.setProperty('top', '5px');
	icon2.style.setProperty('right', '29px');
	icon2.addEventListener('click', function(event) {
		event.stopPropagation();
		editarLista(nombreLista);
	});

	card.appendChild(icon2);
	card.appendChild(icon);
	li.appendChild(card);
	document.getElementById('lista-listas').appendChild(li);
}

// Editar nombre de lista en Lista principal
function editarLista(nombreLista) {
	const input = document.createElement('input');
	input.id = 'inputDialogNombreLista';
	input.type = 'text';
	input.style = 'width: 200px; height: 25px;';
	input.value = nombreLista;

	const label = document.createElement('label');
	label.innerHTML = 'Nombre:';
	label.style = 'padding-right: 15px;';

	const dialogContent = document.createElement('div');
	dialogContent.appendChild(label);
	dialogContent.appendChild(input);
	document.querySelector('.mdc-snackbar').style = 'z-index: 1000;';

	const callback = () => {
		try {
			let nuevoNombre = input.value;
			if (nuevoNombre.trim() === ''){
				showSnackbar('Nombre es un campo requerido.');
			}else{
				usuario.cambiarNombreLista(nombreLista, nuevoNombre);
				listaActual = usuario.getListaPrincipal()[0];
				setListaActual(listaActual);
				dibujarListaPrincipal();
				showSnackbar(`Se edito correctamente la lista`);
			}
		}catch(error){
			showSnackbar(error.message);
		}
	};
	showDialog('Editar Lista', dialogContent, callback);
}

// Agregar lista nueva a lista principal
function crearLista() {
	const input = document.createElement('input');
	input.id = 'inputDialogNombreLista';
	input.type = 'text';
	input.style = 'width: 200px; height: 25px;';

	const label = document.createElement('label');
	label.innerHTML = 'Nombre:';
	label.style = 'padding-right: 15px;';

	const dialogContent = document.createElement('div');
	dialogContent.appendChild(label);
	dialogContent.appendChild(input);
	document.querySelector('.mdc-snackbar').style = 'z-index: 1000;';

	const callback = () => {
		try {
			let nuevoNombre = input.value;
			if (nuevoNombre.trim() === ''){
				showSnackbar('No se puede crear una lista sin nombre.');
			}else{
				try {
					usuario.añadirListaAListaPrincipal(input.value);
					dibujarListaPrincipal();
					showSnackbar(`Se creo ${input.value} correctamente`);
				}catch(error){
					showSnackbar(error.message);
				}
			}
		}catch(error){
			showSnackbar(error.message);
		}
	};
	showDialog('Crear Lista', dialogContent, callback);
}


function eliminarListaDeListaPrincipal(nombreLista) {
	if (usuario.listaPrincipal.length <= 1) {
		showSnackbar('Error: Debe tener al menos una lista');
	} else {
		usuario.eliminarListaDeListaPrincipal(nombreLista);
		listaActual = usuario.getListaPrincipal()[0];
		setListaActual(listaActual);
		dibujarListaPrincipal();
	}
}

function dibujarListaPrincipal() {
	cleanNode(document.querySelector('#lista-listas'));
	listaPrincipal = usuario.getListaPrincipal();
	listaPrincipal.forEach(item => { agregarListaAListaPrincipal(item.nombre); });
}

const botonAgregarLista = document.querySelector('#botonAgregarLista');
botonAgregarLista.addEventListener('click', crearLista);


//Ventana modal
const ventanaModal= (producto, imagen) => {
	const modal = document.getElementById('tvesModal');
	const span = document.getElementsByClassName('close')[0];
	const body = document.getElementsByTagName('body')[0];
	const btnAniadir = document.getElementById('btn-aniadir-modal');
	const btnDescartar = document.getElementById('btn-descartar-modal');

	modal.style.display = 'block';
	body.style.position = 'static';
	body.style.height = '100%';
	body.style.overflow = 'hidden';

	//Mostrar nombre del producto seleccionado.
	const nombreProducto = document.getElementById('nombreProducto');
	cleanNode(nombreProducto);
	const nombreProd = document.createTextNode(producto.nombre);
	nombreProducto.appendChild(nombreProd);

	//Mostrar imagen del producto seleccionado.
	const imgProducto = document.getElementById('imagenProducto');
	imgProducto.src = imagen;
	imgProducto.style = 'height: 80px; width: 80px;';

	//Mostrar descripcion del producto seleccionado.
	const descProducto = document.getElementById('descripcion-producto');
	cleanNode(descProducto);
	const descProd = document.createTextNode(producto.descripcion);
	descProducto.appendChild(descProd);

	//Obtener cantidad del producto
	const cantidad = document.getElementById('cantidadProducto');
	cantidad.value = 0;
	let cantidadActual = 0;
	cantidad.addEventListener('input',(e) => {
		cantidadActual = parseInt(e.currentTarget.value);
		document.querySelector('#cantidadProducto').style = 'border: 1px solid grey;';
	});
	const selectProv = document.getElementById('selectProveedores');
	cleanNode(selectProv);
	const optionDefault = document.createElement('option');
	const optionTextDefault = document.createTextNode('Seleccionar proveedor');
	optionDefault.appendChild(optionTextDefault);
	optionDefault.value = '';
	selectProv.appendChild(optionDefault);
	producto.proveedores.map(pr => {
		const option = document.createElement('option');
		const optionText = document.createTextNode(pr.nombre);
		option.appendChild(optionText);
		option.value = pr.nombre;
		selectProv.appendChild(option);
	});

	//Obtener precio del producto segun proveedor seleccionado
	const precio = document.querySelector('#precio-producto');
	precio.textContent = '$0';
	const selectElementCant = document.querySelector('#cantidadProducto');
	selectElementCant.addEventListener('change', (event) => {
		const cantidadProd =  `${event.target.value}`;
		const selectElementProv = document.querySelector('#selectProveedores');
		selectElementProv.addEventListener('change', (event) => {
			document.querySelector('#selectProveedores').style = 'border: 1px solid grey;';
			const proveedorS = proveedores.find(pr => pr.nombre === `${event.target.value}`);
			const productoEnProv = proveedorS.productos.find(p => p.producto.nombre === producto.nombre);
			const precioProdProv = parseInt(productoEnProv.precio);
			const pNuevo= document.querySelector('#precio-producto');
			pNuevo.textContent =  '$' + cantidadProd*precioProdProv;
		});
	});

	const selectElementProv = document.querySelector('#selectProveedores');
	selectElementProv.addEventListener('change', (event) => {
		const proveedorS = proveedores.find(pr => pr.nombre === `${event.target.value}`);
		const productoEnProv = proveedorS.productos.find(p => p.producto.nombre === producto.nombre);
		const precioProdProv = parseInt(productoEnProv.precio);
		const selectElementCant = document.querySelector('#cantidadProducto');
		selectElementCant.addEventListener('change', (event) => {
			const cantidadProd =  `${event.target.value}`;
			const pNuevo= document.querySelector('#precio-producto');
			pNuevo.textContent = '$' + cantidadProd*precioProdProv;
		});
	});

	btnAniadir.onclick = function() {
		const proveedor = proveedores.find(pr => pr.nombre === selectProv.value);
		try {
			if (cantidadActual <= 0){
				showSnackbar('La cantidad a agregar debe ser mayor a 0.');
				document.querySelector('#cantidadProducto').style = 'border: 2px solid red;';
			}else{
				if (!proveedor){
					showSnackbar('Debes elegir un proveedor para poder agregar el producto.');
					document.querySelector('#selectProveedores').style = 'border: 2px solid red;';
				}else{
					listaActual.setProducto(producto, cantidadActual, proveedor);
					setListaActual(listaActual);
					showSnackbar(`Se agrego el producto ${producto.nombre} a la lista ${listaActual.nombre}`);
					btnDescartar.click();
				}
			}
		}catch(error){
			showSnackbar(error.message);
		}
	};

	btnDescartar.onclick = function() {
		modal.style.display = 'none';
		body.style.position = 'inherit';
		body.style.height = 'auto';
		body.style.overflow = 'visible';
	};

	span.onclick = function() {
		modal.style.display = 'none';
		body.style.position = 'inherit';
		body.style.height = 'auto';
		body.style.overflow = 'visible';
	};

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = 'none';
			body.style.position = 'inherit';
			body.style.height = 'auto';
			body.style.overflow = 'visible';
		}
	};
};

setListaActual(listaActual);
dibujarListaPrincipal();
dibujarListaProductosTotales(productos);

// Codigo para el filtrado de la lista de productos.
const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
	dibujarListaProductosTotales(productos.filter(p => {
		if (select.value === 'verduras'){
			return p.isVerdura;
		}
		if (select.value === 'frutas'){
			return !p.isVerdura;
		}
		return p;
	}));
});
