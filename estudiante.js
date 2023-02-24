let miNombre = "Angel";
let miApellido = "Pacheco";

let estudiante = `  ${miNombre} ${miApellido}`  ;
let estudianteMayus = `${miNombre.toUpperCase()} ${miApellido.toUpperCase()}`;
let estudianteMinus = `${miNombre.toLowerCase()} ${miApellido.toLowerCase()}`;

let letraNumero = estudiante.length;
let primerLetra = estudiante.charAt(2);
let ultimaLetra = estudiante.charAt(8);

let eliminarEspacios = estudiante.trim().length;
let esAngel = estudiante.includes("Angel");

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(letraNumero);
console.log(primerLetra);
console.log(ultimaLetra);
console.log(eliminarEspacios);
console.log(esAngel);