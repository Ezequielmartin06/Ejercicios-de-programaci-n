/*
 Crea un generador de objetos llamado familia donde se genere cada integrante de la familia como objetos, ej familia.papa, familia.mama.
Cada integrante deberá contar con:
- Edad
- Nombre
- Apellido
- dato de color


*/

function familias (edad, nombre, apellido, nacionalidad){
    this.edad = edad;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacionalidad = nacionalidad;
}

let mama = new familias (45,"Romina", "Mitre", "Argentina");
let papa = new familias (50, "Miguel", "Santos", "Brasil");
let hijoMayor = new familias (25, "Carlos", "Santos", "Argentina")
console.log (hijoMayor);
