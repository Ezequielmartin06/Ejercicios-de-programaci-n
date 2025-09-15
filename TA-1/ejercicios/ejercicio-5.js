/*
  Tenés dos arrays: 
    hombres = ["Juan", "Carlos", "Pedro"]
    mujeres = ["Ana", "Laura", "Marta"]
  Creá una función que forme parejas aleatorias:
  - Cada persona solo puede bailar una vez
  - Mostrar las parejas: "Juan baila con Ana"
*/
// tengo 2 array= hombres y mujeres
// tengo que formar 3 parejas
// las parejas deben ser al azar
// se muestran en pantalla

// 1. crear funcin parejaBaile()
// 2. formar parejas:
// - elegir hombre al azar
// - elegir mujer al azar
// - guardar la pareja
// - sacarlos de la lista
// - mostrar el resultado

// crear funcion
function parejaBaile(){
  let hombres = ["Juan", "Carlos", "Pedro"];
  let mujeres = ["Ana", "Laura", "Marta"];

  // elegir hombre al azar
  for (i = 0; i < 3; i++){
    let indiceHombre = Math.floor(Math.random() * hombres.length);
    let hombre = hombres[indiceHombre];

    // elegir mujer al azar
    let indiceMujer = Math.floor(Math.random() * mujeres.length);
    let mujer = mujeres[indiceMujer];

    // mostrar la pareja de baile
    console.log (hombre + " va a bailar con " + mujer);

    // borrar pareja de baile
    hombres.splice(indiceHombre, 1);
    mujeres.splice(indiceMujer, 1);
  }
}

parejaBaile();