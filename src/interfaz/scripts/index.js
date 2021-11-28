// VITTORIO CAIAFA 252295 - GIULIANO BARDECIO 256113

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


import Sistema from '../../dominio/sistema';
import Transaccion from '../../dominio/transaccion';

const sistema = new Sistema();

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
		var transaccion = new Transaccion(nombre, tipoInput, monto, categoria);
		sistema.setTransacciones(transaccion);

		vaciarCamposTextoAgregar();
		actualizarBalance();
		actualizarTabla();
	}
}

function actualizarBalance() {
	let balance = document.getElementById('idBalance');
	let ingreso = document.getElementById('ingreso');
	let gasto = document.getElementById('gasto');

	let nroBalance = 0;
	let nroIngreso = 0;
	let nroGasto = 0;

	let transacciones = sistema.getTransacciones();
	for (let i = 0; i < transacciones.length; i++){ // false si es gasto
		if(transacciones[i].getTipo()){
			nroBalance -= transacciones[i].getMonto();
			nroGasto += transacciones[i].getMonto(); 
		} else {
			nroBalance += transacciones[i].getMonto();
			nroIngreso += transacciones[i].getMonto(); 
		}
	}

	ingreso.innerHTML = nroIngreso;
	gasto.innerHTML = nroGasto;
	balance.innerHTML = "$" + nroBalance;
}

function actualizarTabla() {

	let tabla = document.getElementById('idTBody');
	let transacciones = sistema.getTransacciones();

	let template = ``;
	tabla.innerHTML = template;

	for (let i = 0; i < transacciones.length; i++) {

		var nombre = transacciones[i].getNombre();
		var categoria = transacciones[i].getCategoria();
		var fecha = transacciones[i].getFecha();
		var monto = transacciones[i].getMonto();
		var tipo = transacciones[i].getTipo();

		const tr = document.createElement('tr');
		const tdNombre = document.createElement('th');
		tdNombre.innerHTML = nombre;
		if (tipo) {
			tdNombre.style = 'color:red;';
		} else {
			tdNombre.style = 'color:green;';
		}
		const tdCat = document.createElement('td');
		tdCat.innerHTML = categoria;
		const tdFecha = document.createElement('td');
		tdFecha.innerHTML = fecha;
		const tdMonto = document.createElement('td');
		tdMonto.innerHTML = monto;

		// Edit icon
		let icon = document.createElement('i');
		icon.setAttribute('class', 'material-icons mdc-button__icon');
		icon.setAttribute('id', nombre);
		icon.innerHTML = 'edit';
		icon.classList.add('hoverIcon');
		icon.addEventListener('click', function (event) {
			event.stopPropagation();
			editarLista(this.id);
		});
		const tdIcon = document.createElement('td');
		tdIcon.appendChild(icon);


		// Delete Icon
		let icon2 = document.createElement('i');
		icon2.setAttribute('class', 'material-icons mdc-button__icon');
		icon2.setAttribute('id', nombre);
		icon2.innerHTML = 'clear';
		icon2.classList.add('hoverIcon');
		icon2.addEventListener('click', function (event) {
			event.stopPropagation();
			eliminarLista(this.id);
		});
		const tdIcon2 = document.createElement('td');
		tdIcon2.appendChild(icon2);

		tr.appendChild(tdNombre);
		tr.appendChild(tdCat);
		tr.appendChild(tdFecha);
		tr.appendChild(tdMonto);
		tr.appendChild(tdIcon);
		tr.appendChild(tdIcon2);
		tabla.appendChild(tr);

	}
}

function editarLista(nombreTx) {
	const transacciones2 = sistema.getTransacciones();
	let editar;
	for (let i = 0; i < transacciones2.length; i++) {
		if (transacciones2[i].getNombre() == nombreTx) {
			editar = transacciones2[i];
			transacciones2.splice(i, 1);
		}
	}
	mostrarSeccionAgregar();
	document.getElementById("inputNombre").value = editar.getNombre();
	document.getElementById("inputMonto").value = editar.getMonto();
	document.getElementById('botonAgregarIG').innerHTML = "GARDAR";
	document.getElementById("idAgregarcoso").innerHTML = "Editar"

	//document.getElementById('categoriaAgregar');
	//var categoria = select.options[select.selectedIndex].text;
	document.getElementById("idTipoAgregar").checked = editar.getTipo();

	actualizarTabla();
	actualizarBalance();
}

function eliminarLista(nombreTx) {
	const transacciones3 = sistema.getTransacciones();
	for (let i = 0; i < transacciones3.length; i++) {
		if (transacciones3[i].getNombre() == nombreTx) {
			transacciones3.splice(i, 1);
		}
	}
	actualizarTabla();
	actualizarBalance();
}

function vaciarCamposTextoAgregar() {
	document.getElementById("inputNombre").value = "";
	document.getElementById("inputMonto").value = "";
	document.getElementById("inputDes").value = "";
	document.getElementById("idTipoAgregar").checked = false;
}


// agregar pago a la tabla
let btnPagar_ = document.getElementById('botonAgregarPago');
btnPagar_.addEventListener('click', agregarPagoTabla);

function agregarPagoTabla() {
	let nombre = "Pago";
	let monto = document.getElementById("inputMontoPagar").value;
	var select = document.getElementById('categoriaAgregarPagar');
	var categoria = select.options[select.selectedIndex].text;
	let tipoInput = true;

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
		var transaccion = new Transaccion(nombre, tipoInput, monto, categoria);
		sistema.setTransacciones(transaccion);

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
