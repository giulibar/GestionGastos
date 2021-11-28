function sintaxisAgregar(input1, input2){
    let cumple = true;
    if(input1 == ""){
        cumple = false;
    }else if(input2 == ""){
        cumple = false;
    }else if(input2 <= 0){
        cumple = false;
    }
    return cumple;
}

module.exports = sintaxisAgregar;
