import { MDCTabBar } from '@material/tab-bar';
import { MDCDialog } from '@material/dialog';
import { MDCSnackbar } from '@material/snackbar';
import { MDCSelect } from '@material/select';
import { cleanNode, createData, getImagenProd } from './utils';



const botonHome = document.getElementById("homeButton");
botonHome.addEventListener('click', mostrarSeccionHome);

const botonAgregar = document.getElementById("botonAgregar");
botonAgregar.addEventListener('click', mostrarSeccionAgregar);

const botonTx = document.getElementById("transaccionesButton");
botonTx.addEventListener('click', mostrarSeccionTransacciones);

const botonPagar = document.getElementById("botonPagar");
botonPagar.addEventListener('click', mostrarSeccionPagar);

function mostrarSeccionHome() {
	document.getElementById("homeId").style.visibility = 'visible';
	document.getElementById("seccionAgregar").style.visibility = 'hidden';
	document.getElementById("seccionPagar").style.visibility = 'hidden';
	document.getElementById("seccionTransacciones").style.visibility = 'hidden';
}

function mostrarSeccionAgregar() {
	document.getElementById("homeId").style.visibility = 'hidden';
	document.getElementById("seccionAgregar").style.visibility = 'visible';
	document.getElementById("seccionPagar").style.visibility = 'hidden';
	document.getElementById("seccionTransacciones").style.visibility = 'hidden';
}

function mostrarSeccionPagar() {
	document.getElementById("homeId").style.visibility = 'hidden';
	document.getElementById("seccionAgregar").style.visibility = 'hidden';
	document.getElementById("seccionPagar").style.visibility = 'visible';
	document.getElementById("seccionTransacciones").style.visibility = 'hidden';
}

function mostrarSeccionTransacciones() {
	document.getElementById("homeId").style.visibility = 'hidden';
	document.getElementById("seccionAgregar").style.visibility = 'hidden';
	document.getElementById("seccionPagar").style.visibility = 'hidden';
	document.getElementById("seccionTransacciones").style.visibility = 'visible';
}
