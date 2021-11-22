import {
	MDCTabBar
} from '@material/tab-bar';
import {
	MDCDialog
} from '@material/dialog';
import {
	MDCSnackbar
} from '@material/snackbar';
import {
	MDCSelect
} from '@material/select';
import {
	MDCRipple
} from '@material/ripple';
import {
	MDCTopAppBar
} from '@material/top-app-bar';
import {
	MDCTextField
} from '@material/textfield';

import {
	cleanNode,
	createData,
	getImagenProd
} from './utils';

import sistema from '../../dominio/sistema';
import transaccion from '../../dominio/transaccion';


const Sistema = new sistema();

const textFieldNombre = new MDCTextField(document.getElementById('nombre'));
const textFieldMonto = new MDCTextField(document.getElementById('monto'));
const textFieldDesc = new MDCTextField(document.getElementById('descripcion'));
const textFieldNombrePagar = new MDCTextField(document.getElementById('nombrePagar'));
const textFieldMontoPagar = new MDCTextField(document.getElementById('montoPagar'));
const textFieldDescPagar = new MDCTextField(document.getElementById('descripcionPagar'));

// Botones
const botonHome = document.getElementById("homeButton");
botonHome.addEventListener('click', mostrarSeccionHome);

const botonAgregar = document.getElementById("botonAgregar");
botonAgregar.addEventListener('click', mostrarSeccionAgregar);

const botonTx = document.getElementById("transaccionesButton");
botonTx.addEventListener('click', mostrarSeccionTransacciones);

const botonPagar = document.getElementById("botonPagar");
botonPagar.addEventListener('click', mostrarSeccionPagar);


// Ocultar/mostrar secciones
function mostrarSeccionHome() {
	document.getElementById("homeId").style.filter = "none";
	document.getElementById("seccionAgregar").style.visibility = 'hidden';
	document.getElementById("seccionPagar").style.visibility = 'hidden';
	document.getElementById("seccionTransacciones").style.visibility = 'hidden';
}

function mostrarSeccionAgregar() {
	document.getElementById("homeId").style.filter = 'blur(20px)';
	document.getElementById("seccionAgregar").style.visibility = 'visible';
	document.getElementById("seccionPagar").style.visibility = 'hidden';
	document.getElementById("seccionTransacciones").style.visibility = 'hidden';
}

function mostrarSeccionPagar() {
	document.getElementById("homeId").style.filter = 'blur(20px)';
	document.getElementById("seccionAgregar").style.visibility = 'hidden';
	document.getElementById("seccionPagar").style.visibility = 'visible';
	document.getElementById("seccionTransacciones").style.visibility = 'hidden';
}

function mostrarSeccionTransacciones() {
	document.getElementById("homeId").style.filter = 'blur(20px)';
	document.getElementById("seccionAgregar").style.visibility = 'hidden';
	document.getElementById("seccionPagar").style.visibility = 'hidden';
	document.getElementById("seccionTransacciones").style.visibility = 'visible';
}



// Agregar gasto/ingreso
let btnAdd = document.getElementById('botonAgregarIG');
btnAdd.addEventListener('click', agregarIG);

function agregarIG() {
	let nombre = document.getElementById("inputNombre").value;
	let monto = document.getElementById("inputMonto").value;
	var select = document.getElementById('categoriaAgregar');
	var categoria = select.options[select.selectedIndex].text;
	let tipoInput = document.getElementById("idTipoAgregar").checked;

	let cumpleNombre = true;
	let cumpleMonto = true;
	if (nombre == "" && (monto <= 0 || monto == "")) {
		alert("Nombre y monto invalidos!");
		cumpleNombre = false;
		cumpleMonto = false;
	} else if (nombre == "") {
		alert("Nombre invalido!");
		cumpleNombre = false;
	} else if (monto <= 0 || monto == "") {
		alert("Monto invalido!");
		cumpleMonto = false;
	}

	monto = parseInt(monto);
	if (cumpleNombre && cumpleMonto) {
		var Transaccion = new transaccion(nombre, tipoInput, monto, categoria);
		Sistema.setTransacciones(Transaccion);

		if (tipoInput) {
			Sistema.setGasto(monto);
			Sistema.setBalance(-monto);
		} else {
			Sistema.setIngreso(monto);
			Sistema.setBalance(monto);
		}

		// if(categoria == "Alimentacion"){
		// 	Sistema.sumarPorCategoria(0);
		// } else if (categoria == "Salud"){
		// 	Sistema.sumarPorCategoria(1);
		// } else if (categoria == "Seguridad"){
		// 	Sistema.sumarPorCategoria(2);
		// } else if (categoria == "Trabajo"){
		// 	Sistema.sumarPorCategoria(3);
		// }

		vaciarCamposTextoAgregar();
		actualizarBalance();
		actualizarTabla();
	}
}

function actualizarBalance() {
	let balance = document.getElementById('idBalance');
	let ingreso = document.getElementById('ingreso');
	let gasto = document.getElementById('gasto');

	let nroBalance = Sistema.getBalance();
	let nroIngreso = Sistema.getIngreso();
	let nroGasto = Sistema.getGasto();

	ingreso.innerHTML = nroIngreso;
	gasto.innerHTML = nroGasto;
	balance.innerHTML = "$" + nroBalance;
}

function actualizarTabla() {

	let tabla = document.getElementById('idTBody');
	let transacciones = Sistema.getTransacciones();

	let template = ``;
	tabla.innerHTML = template;
	tabla.appendChild(document.createElement('tr'))

	for (let i = 0; i < transacciones.length; i++) {

		var nombre = transacciones[i].getNombre();
		var categoria = transacciones[i].getCategoria();
		var fecha = transacciones[i].getFecha();
		var monto = transacciones[i].getMonto();
		var tipo = transacciones[i].getTipo();

		const tr = document.createElement('tr');
		const tdNombre = document.createElement('td');
		tdNombre.value = nombre;
		if (tipo) {
			tdNombre.style = 'color: red;';
		} else {
			tdNombre.style = 'color: green;';
		}
		const tdCat = document.createElement('td');
		tdCat.value = categoria;
		const tdFecha = document.createElement('td');
		tdFecha.value = fecha;
		const tdMonto = document.createElement('td');
		tdMonto.value = monto;

		// Edit icon
		let icon = document.createElement('i');
		icon.setAttribute('class', 'material-icons mdc-button__icon');
		icon.innerHTML = 'edit';
		icon.classList.add('hoverIcon');
		const callback = () => {
			eliminarListaDeListaPrincipal(nombreLista);
			showSnackbar(`Se elimino ${nombreLista} de las listas`);
		};
		icon.addEventListener('click', function (event) {
			event.stopPropagation();
			let content = document.createElement('p');
			content.innerHTML = `¿Está seguro que desea eliminar la lista ${nombreLista}?`;
			showDialog('Eliminar Lista', content, callback);
		});

		// Delete Icon
		let icon2 = document.createElement('i');
		icon2.setAttribute('class', 'material-icons mdc-button__icon');
		icon2.innerHTML = 'clear';
		icon2.classList.add('hoverIcon');
		icon2.addEventListener('click', function (event) {
			event.stopPropagation();
			editarLista(nombreLista);
		});

	//	tr.appendChild(tdNombre, tdCat, tdFecha, tdMonto, icon, icon2);\
		const prueba = document.createElement('td');
		const prueba2 = document.createElement('td');
		tr.appendChild(prueba);
		tr.appendChild(prueba2);
		tabla.appendChild(tr);

	}
}

function editarLista(_nombreTx) {
	console.log("HOLAAA");
}

function vaciarCamposTextoAgregar() {
	document.getElementById("inputNombre").value = "";
	document.getElementById("inputMonto").value = "";
	document.getElementById("inputDes").value = "";
	document.getElementById("idTipoAgregar").checked = false;
}


// agregar pago a la tabla
let btnPagar = document.getElementById('botonAgregarPago');
btnPagar.addEventListener('click', agregarPagoTabla);

function agregarPagoTabla() {
	let nombre = "Pago";
	let montoInput = document.getElementById("inputMontoPagar");
	var select = document.getElementById('categoriaAgregarPagar');
	var categoria = select.options[select.selectedIndex].text;
	let tipoInput = false;

	let cumpleCodigo = true;
	let cumpleMonto = true;
	if (nombre2 == "" && (monto <= 0 || monto == "")) {
		alert("CodigoGCiD y monto invalidos!");
		cumpleCodigo = false;
		cumpleMonto = false;
	} else if (nombre2 == "") {
		alert("CodigoGCiD invalido!");
		cumpleCodigo = false;
	} else if (monto <= 0 || monto == "") {
		alert("Monto invalido!");
		cumpleMonto = false;
	}

	monto = parseInt(monto);
	if (cumpleCodigo && cumpleMonto) {
		var transaccion = new transaccion(nombre, tipoInput, monto, categoria);
		Sistema.setTransacciones(Transacciones);

		Sistema.setGasto(monto);
		Sistema.setBalance(monto);

		// if(categoria == "Alimentacion"){
		// 	Sistema.sumarPorCategoria(0);
		// } else if (categoria == "Salud"){
		// 	Sistema.sumarPorCategoria(1);
		// } else if (categoria == "Seguridad"){
		// 	Sistema.sumarPorCategoria(2);
		// } else if (categoria == "Trabajo"){
		// 	Sistema.sumarPorCategoria(3);
		// }

		vaciarCamposTextoPagar();
		actualizarBalance();
		actualizarTabla();
	}
}

function vaciarCamposTextoPagar() {
	document.getElementById("inputNombrePagar").value = "";
	document.getElementById("inputMontoPagar").value = "";
	document.getElementById("inputDesPagar").value = "";
}

// // Editar transaccion
// let btnEditar = document.getElementById('botonAgregarPago');
// btnPagar.addEventListener('click', editarTransaccion);

// function editarTransaccion(){
// 	let tabla = document.getElementById('idEditar');
// 	let transacciones = Sistema.getTransacciones();
// 	// let nombreEditar = ;
// 	// let nombreEditar = ;
// 	// let nombreEditar = ;
// 	// let nombreEditar = ;
// 	// let nombreEditar = ;
// 	for(int i=0; i<transacciones.length; i++){
// 		let cont = 0;
// 	 	if(transacciones[i].getNombre() == ""){
// 			cont++;
// 	 	}
// 		 if(transacciones[i].getMonto() == ""){
// 			cont++;
// 		}
// 		if(transacciones[i].getTipo() == ""){
// 			cont++;
// 		}
// 		if(transacciones[i].getCategoria() == ""){
// 			cont++;
// 		}
// 		if(transacciones[i].getFecha() == ""){
// 			cont++;
// 		}
// 		if(cont == 5){

// 		}
// 	}
// }

// Borrar transaccion
function borrarTransaccion() {

}

