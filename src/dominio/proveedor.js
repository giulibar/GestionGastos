class Proveedor {
	constructor(nombre) {
		this.nombre = nombre;
		this.productos = [];
	}

	getProveedor() {
		return {
			nombre: this.nombre,
			productos: this.productos
		};
	}

	tieneProducto(producto) {
		let result = -1;
		this.productos.forEach((productoProveedor, index) => {
			if (productoProveedor.producto == producto) {
				result = index;
			}
		});
		return result;
	}

	addProducto(producto, precio, stock) {
		let productoProveedor = {
			producto: producto,
			precio: precio,
			stock: stock
		};
		let indiceProducto = this.tieneProducto(producto);
		if (indiceProducto == -1) {
			this.productos.push(productoProveedor);
			producto.proveedores.push(this);
		} else {
			if (precio != this.productos[indiceProducto].precio) {
				throw 'Los precios no coinciden';
			} else {
				this.productos[indiceProducto].stock += stock;
			}
		}
	}
}

export default Proveedor;
