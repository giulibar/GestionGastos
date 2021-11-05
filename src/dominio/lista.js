class Lista {
	constructor(nombre) {
		this.productos = [];
		this.nombre = nombre;
		this.total = 0;
	}

	removeProduct(nombreProducto, cantidad, nombreProveedor){
		const encontroProducto = this.productos.find(p => p.producto.nombre === nombreProducto && nombreProveedor === p.proveedor.nombre);
		if (encontroProducto){
			if (cantidad >= encontroProducto.cantidad){
				const indexProducto = this.productos.findIndex(p => p.producto.nombre === nombreProducto);
				this.productos.splice(indexProducto, 1);
				const precio = encontroProducto.proveedor.productos.find(p => p.producto.nombre === nombreProducto).precio;
				this.total = (parseInt(this.total) - (parseInt(precio) * parseInt(cantidad))) >= 0 ? parseInt(this.total) - (parseInt(precio) * parseInt(cantidad)) : 0;
			}else{
				const precio = encontroProducto.proveedor.productos.find(p => p.producto.nombre === nombreProducto).precio;
				encontroProducto.cantidad = parseInt(encontroProducto.cantidad) - parseInt(cantidad);
				this.total = (parseInt(this.total) - (parseInt(precio) * parseInt(cantidad))) >= 0 ? parseInt(this.total) - (parseInt(precio) * parseInt(cantidad)) : 0;
			}
		}else{
			throw new Error('No se puede remover un producto que no pertenece a la lista.');
		}
	}

	setProducto(producto, cantidad, proveedor) {
		const encontroProducto = this.productos.find(p => p.producto.nombre === producto.nombre && proveedor.nombre === p.proveedor.nombre);
		const productoProveedor = proveedor.productos.find(p => p.producto.nombre === producto.nombre);
		if (productoProveedor){
			if (((parseInt(cantidad) > parseInt(productoProveedor.stock)) || (encontroProducto &&  (parseInt(cantidad) + parseInt(encontroProducto.cantidad)) > productoProveedor.stock))){
				throw new Error('No hay suficiente stock para agregar el producto a la lista.');
			}

			if (encontroProducto){
				this.total = parseInt(this.total) + (parseInt(productoProveedor.precio) * parseInt(cantidad));
				encontroProducto.cantidad = parseInt(encontroProducto.cantidad) + parseInt(cantidad);
				return;
			}

			this.total = parseInt(this.total) + (parseInt(productoProveedor.precio) * parseInt(cantidad));
			this.productos.push({ producto: producto, cantidad: cantidad, proveedor: proveedor });
		}else{
			throw new Error('Este proveedor no provee ese producto.');
		}
	}

	getProductos() {
		return this.productos;
	}

}

export default Lista;
