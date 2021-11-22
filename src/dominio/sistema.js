import transaccion from "./transaccion";

class sistema {
    constructor(){
        this.balance = 0;
        this.gasto = 0;
        this.ingreso = 0;
        this.transacciones = [];
        // this.trPorCategoria = [0,0,0,0];
    }

    getBalance(){
        return this.balance;
    }
    setBalance(_balance){
        this.balance += _balance;
    }

    getGasto(){
        return this.gasto;
    }
    setGasto(_gasto){
        this.gasto += _gasto;
    }

    getIngreso(){
        return this.ingreso;
    }
    setIngreso(_ingreso){
        this.ingreso += _ingreso;
    }

    getTransacciones(){
        return this.transacciones;
    }
    setTransacciones(_transaccion){
        this.transacciones.push(_transaccion);
    }

    // sumarPorCategoria(pos){
    //     this.trPorCategoria[pos]++;
    // }

}

export default sistema;