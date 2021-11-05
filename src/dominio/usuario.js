import Lista from './lista.js';

class Usuario {
	constructor(nombre, email) {
		this.nombre = nombre;
		this.email = email;
		this.listaPrincipal = [];
	}

	getUsuario(){
		return {
			nombre : this.nombre,
			email : this.email,
			listaPrincipal : this.listaPrincipal
		};
	}

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre){
		this.nombre = nombre;
	}

	getEmail(){
		return this.email;
	}

	setEmail(email){
		this.email = email;
	}

	getListaPrincipal(){
		return this.listaPrincipal;
	}

	setListaPrincipal(lista){
		this.listaPrincipal = lista;
	}

	tieneLista(nombreLista) {
		return !!this.listaPrincipal.find(l => l.nombre === nombreLista);
	}

	cambiarNombreLista(nombreLista, nuevoNombre) {
		if (this.tieneLista(nombreLista)) {
			if(this.tieneLista(nuevoNombre)) {
				throw Error(`Ya existe una lista con el nombre ${nuevoNombre}`);
			} else {
				this.listaPrincipal.find(l => l.nombre === nombreLista).nombre = nuevoNombre;
			}
		} else {
			throw new Error(`No tienes listas con el nombre ${nombreLista}`);
		}

	}

	añadirListaAListaPrincipal(nombre){
		const encontroLista = this.listaPrincipal.find(l => l.nombre === nombre);
		if(encontroLista){
			throw Error(`Ya tienes una lista con nombre ${nombre} por favor elige otro.`);
		} else {
			let nuevaLista = new Lista(nombre);
			this.listaPrincipal.push(nuevaLista);
		}
	}

	eliminarListaDeListaPrincipal(nombre){
		const encontroLista = this.listaPrincipal.find(l => l.nombre === nombre);
		if(encontroLista){
			const indexLista = this.listaPrincipal.findIndex(l => l.nombre === nombre);
			this.listaPrincipal.splice(indexLista, 1);
		} else {
			throw new Error(`No tienes listas con el nombre ${nombre}`);
		}

	}

	getListaEnListaPrincipal(nombre){
		const encontroLista = this.listaPrincipal.find(l => l.nombre === nombre);
		if(encontroLista){
			return encontroLista;
		}else {
			throw new Error(`No se encuentra la lista de nombre ${nombre} dentro de tus listas.`);
		}
	}
}

export default Usuario;
