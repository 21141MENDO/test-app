import Tarea from './tareas.js';

export default class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }
    mostrart(){
        super.mostrart();
        console.log(` y la cantidad de ${this.cantidad}`);
    }
    hola(){
        return 'hola';
    }
};

