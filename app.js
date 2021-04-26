// import { nombreTarea, crearTarea, tareaCompletada }   from './tareas.js';

// console.log(nombreTarea);

// const tarea1 = crearTarea('Pasear al perro', 'Urgente');

// console.log(tarea1);

// tareaCompletada();

import ComprasPendientes from './compras.js';
import Tarea from './tareas.js';


const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
const compras1 = new ComprasPendientes('Leche','Urgente',2);

console.log(tarea1);
console.log(compras1);

tarea1.mostrart();
compras1.mostrart();