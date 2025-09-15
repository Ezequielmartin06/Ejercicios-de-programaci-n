/*
  Creá una función que reciba un número N y:
  - Genere un array con números de 1 a N
  - Remueva alternativamente elementos de los extremos
  - Mostrar cada paso hasta vaciar el array
*/

// function relojDigital(num){
//   for (reloj = 1; reloj <= num; reloj++){
//     console.log("array inicial", reloj);
//   }
//   let sacarNum = true;

//   while (reloj.length > 0){
//     if (sacarNum){
//       reloj.shift();
//     } else {
//       reloj.pop();
//     }
//     console.log(reloj);
//   }
// }

function relojDigital (num){
  let arr = [];
  for (let i = 1; i <= num; i++){
    arr.push(i);
  }
  console.log(arr);
  let sacarNum = true;
  while (arr.length > 0){
    if (sacarNum){
      arr.shift();
    } else {
      arr.pop();
    }
    console.log(arr);
  }
}


relojDigital(10);