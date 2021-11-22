
class Transaccion {
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

    setNombre(name){
        this.nombre = name;
    }

    getTipo(){
        return this.tipo;
    }

    setTipo(type){
        this.tipo = type;
    }

    getMonto(){
        return this.monto;
    }

    setMonto(amount){
        this.monto = amount;
    }

    getFecha(){
        return this.fecha;
    }

    getCategoria(){
        return this.categoria;
    }

    setCategoria(category){
        this.categoria = category;
    }

}

export default Transaccion;