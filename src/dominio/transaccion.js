
class transaccion {
    constructor(_nombre, _tipo, _monto, _categoria){
        this.nombre = _nombre;
        this.tipo = _tipo; // false si es gasto
        this.monto = _monto;
        this.fecha = new Date().toDateString();
        this.categoria = _categoria;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(_nombre){
        this.nombre = _nombre;
    }

    getTipo(){
        return this.tipo;
    }
    setTipo(_tipo){
        this.tipo = _tipo;
    }

    getMonto(){
        return this.monto;
    }
    setMonto(_monto){
        this.monto = _monto;
    }

    getFecha(){
        return this.fecha;
    }
    setFecha(_fecha){
        this.fecha = _fecha;
    }

    getCategoria(){
        return this.categoria;
    }
    setCategoria(_cat){
        this.categoria = _cat;
    }

}

export default transaccion;