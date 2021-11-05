

class Producto {
	constructor(nombre, descripcion, esVerdura, estacion) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.isVerdura = esVerdura;
		this.estacion = estacion;
		this.proveedores = [];
	}

	getProducto() {
		return {
			nombre: this.nombre,
			isVerdura: this.isVerdura,
			descripcion: this.descripcion,
			estacion: this.estacion,
			proveedores: this.proveedores,
		};
	}
  
}

export default Producto;
  
