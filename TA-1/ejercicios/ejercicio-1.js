//   Creá una función que genere un array de 10 números aleatorios entre 1-100.
//   El array debe cumplir:
//   - Los números pares solo pueden estar en posiciones impares
//   - Los números impares solo en posiciones pares
//   Mostrar el laberinto resultante.

function generarLaberinto (){
    const arr = [];

    for (i = 0; i < 10; i++){
        let num;
        if (i % 2 === 0){
            do{
                num = Math.floor(Math.random() * 100) + 1;
            } while (num % 2 === 0);
        } else {
            do{
                num = Math.floor(Math.random() * 100 ) + 1;
            } while (num % 2 !== 0);
        }
        arr.push(num)
    }
    return arr;
}

console.log(generarLaberinto())