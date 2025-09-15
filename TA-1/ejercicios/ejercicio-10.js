var usuario = {
    saldo: 500,
    titular:"messi",
    numero: "000010"
}

function agregarSaldo (monto){
    if (monto > 0){
        usuario.saldo = usuario.saldo + monto;
    } else{
        console.log("Monto invalido, te corto las manos antes de robarle a messi")
    }
}