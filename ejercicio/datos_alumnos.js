const readlineSync = require('readline-sync');

const datos = [];

function cargarAlumnos() {
    let nombre = readlineSync.question("Ingrese el nombre del alumno: ");

    let alumno = datos.find(al => al[0] === nombre);
    if (alumno){
        console.log("El alumno ya existe");
        let opcion = readlineSync.question("¿Quiere agregar (A) o modificar (M) una nota?: ").toUpperCase();

    if (opcion === "A"){
        let nuevaMateria = readlineSync.question("Ingrese el nombre de la nuevaMateria: ");
        let nuevaNota = parseInt(readlineSync.question("Ingrese la nota: "));
        alumno[1].push([nuevaMateria, nuevaNota]);
        console.log(`Se agregó la materia ${nuevaMateria} con la nota ${nuevaNota}`);
    } 
    else if (opcion === "M"){
        let materia = readlineSync.question("Ingrese el nombre de la materia a modificar: ");
        let nota = parseInt(readlineSync.question("Ingrese la nueva nota: "));
        let materiaEncontrada = alumno[1].find(m => m[0] === materia);

        if(materiaEncontrada){
            materiaEncontrada[1] = nota;
            console.log(`Se actualizó la materia ${materia} con la nota ${nota}`);
        } else {
        console.log("Matería no encontrada");
        }
    } else {
        console.log("Opción no válida");
        }
    } else {
        let materias = [];
        let continuar = true;

        while(continuar){
            let materia = readlineSync.question("Ingrese el nombre de la materia: ");
            let nota = parseInt(readlineSync.question("Ingrese la nota de la materia: "));
            materias.push([materia, nota]);
            continuar = readlineSync.keyInYN("Desea agregar otra materia?");
        }
        datos.push([nombre, materias]);
        console.log("Alumno agregado correctamente");
    }
}

while(readlineSync.keyInYN("Desea agregar datos de un alumno?")){
    cargarAlumnos();
}

console.log("\n Datos de alumnos:");
datos.forEach(alumno => {
    let nombre = alumno[0];
    console.log(`${nombre}:`);
    alumno[1].forEach(materia => {
        console.log(` - ${materia[0]}: ${materia[1]}`);
    });
    console.log("");
});