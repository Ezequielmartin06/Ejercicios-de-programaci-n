/*
  Simulá una máquina que:
  - Tenga un array de productos: ["Agua", "Jugo", "Galletas"]
  - Genere un número aleatorio para "falla" (10% probabilidad)
  - Si no hay falla: entregar producto aleatorio y removerlo del array
  - Si hay falla: mostrar "¡Producto atascado!"
*/

// 1. declarar el array
// 2. generar la falla 0.1 (10%)
// 3. declarar condicion de falla
// 4. declarar condicion de entrega
// 5. eliminar producto del array
// 6. mostrar el producto 

function maquinaExpendedora(){
  // declarar array
  let productos = ["Agua", "Jugo", "Galletas"];
  // generar fallas
  let falla = Math.floor(Math.random() <= 0.1);

  // condicion de falla
  if (falla){
    console.log("Producto Atascado")
  } else{
    // condicion de entrega
    let indice = Math.floor(Math.random() * productos.length);
    let producto = productos[indice];

    // eliminar producto
    productos.splice(indice, 1);

    // mostrar producto
    console.log ("Producto entregado", producto)
    console.log ("Productos restantes", productos)
  }
}

maquinaExpendedora();