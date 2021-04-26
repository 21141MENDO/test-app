/*// crear variable

// var aprendiendo99 = 'JavaScript';

// const aprendiendo = true;
// aprendiendo = false;

// let aprendiendo98 = 10;
// aprendiendo98 = 'juan';

// // scope
// const musica = 'Rock';
// if (musica){
//     var musica = 'Grnge';
//     console.log('dentro del if: ', musica);
// }console.log('Fuera del IF', musica);

// Template String
// const nombre = "juan";
// const trabajo = "Desarrollador Web";

// concatenar JavaScript
// console.log(`Nombre: ${nombre}, Trabajo:${trabajo}`);

//concatenar con multiples lineas
// const contenedorApp = document.querySelector("#app");
// let html = '<ul>' +
//                 '<li> Nombre:' + nombre + '</li>'
//                 '<li> Trabajo:' + trabajo + '</li>' +
//             '</ul>';
// let html = `<ul>


// <li> Nombre: ${nombre}</li>
//                 <li> Trabajo: ${trabajo} </li>
//             </ul>`;
// contenedorApp.innerHTML = html;

//metodos o funciones en un objeto
// const persona = {
//     nombre:'jUAN',
//     trabajo:'Desarrollador web',
//     edad: 500,
//     musicaRock: true,
//     mostrarInformacion(){
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//     }
// }
// persona.mostrarInformacion()

// arreglos y map

// carrito = [
//     'Producto 1',
//     'producto 2',
//     'producto 3'
// ];

// carrito.map(producto => {
//     return 'El producto es ' + producto;
// })

// const persona = {
//     nombre: 'Juan',
//     profesion:'Isc',
//     edad:30
// }
// //distroction int {}
// const {nombre} = persona
// console.log(nombre);

//usando metodo keys para trear nombre de las llaves del objeto
// console.log(Object.keys(persona));
// console.log(persona);

//Sprear operator ... combina 2 arreglos diferentes
// let lenguajes = [
//     'JavaScript',
//     'PHP',
//     'Python'
// ];
// console.log(lenguajes);

// let frameworks = [
//     'ReactJS',
//     'Laravel',
//     'Django'
// ];
// console.log(frameworks);
// // forma antigua Sprear operator
// let combinacion = lenguajes.concat(frameworks);
// console.log(combinacion)

// // forma nueva Sprear operator
// let combinacion = [...lenguajes,...frameworks];
// console.log(combinacion);

function suma(a,b,c){
    console.log(a+b+c);
}
const numeros = [1,2,3];

suma(...numeros);

//metodos en arreglos
const persona = [
    {nombre:'Juan', edad: 20, aprendiendo: 'JavaScript'},
    {nombre:'Pedro', edad: 19, aprendiendo: 'JavaScript'},
    {nombre:'Maria', edad: 22, aprendiendo: 'JavaScript'},
    {nombre:'Luis', edad: 23, aprendiendo: 'JavaScript'},
    {nombre:'Mario', edad: 21, aprendiendo: 'JavaScript'},
];
// console.log(persona);

//mayores de 20 años
const mayores = persona.filter(persona =>{
    return persona.edad > 20;
});
// console.log(mayores);

const maria = persona.find(persona =>{
    return persona.nombre === 'Maria'
});
// console.log(maria.aprendiendo);

//suma de las edades de las personas
let total = persona.reduce((edadTotal,persona) =>{
    return edadTotal + persona.edad;
}, 0);

console.log(total/ persona.length);


// promises, se debe utilizar .then 
const aplicarDescuento = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let decuento1  = true;

        if(decuento){
            resolve('Descuento aplicado');
        }else{
            reject('No se pudo aplicar el descuento');
        }
    }, 3000);
});

aplicarDescuento.then(resultado =>{
    console.log(resultado);
}).catch(error =>{
    console.log(error);
});


// promises con ajax
const DescargarUsuarios = (cantidad) =>
  new Promise((resolve, reject) => {
    // pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamando a ajax
    const xhr = new XMLHttpRequest();
    3;
    // abrimos conexion, si se desea asincrona se pone true
    xhr.open("GET", api, true);

    // on load, JSON:parse se utiliza para poder tratar un elemento String en un objeto para poderlo manipular
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    // on sed
    xhr.send();
  });

// DescargarUsuarios(20);
// 
DescargarUsuarios(30).then(
  (resultado) => imprimirHTML(resultado),
  (error) => console.error(new Error("Hubo un error" + error))
);

function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
        html += `
        <li>
                nombre: ${usuario.name.firts} ${usuario.name.last}
                pais: ${usuario.nat}
                imagen:
                <img src="${usuario.picture.medium}"> 
        </li>
        `;
    });
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}
*/

/*export const nombreTarea = 'Pasear al perro';

// exportar una funcion
export const crearTarea = (tarea, urgencia) =>{
    return `la tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = () =>{
    console.log('la tarea se completo')
}*/



//se exportar 2 o mas literales con un solo export default creando un objeto
// const tarea = 'Tare';

// export default{
//     nombre: nombreTarea,
//     tarea: tarea 

// }


 /*una forma diferente de exportar tareas es y en la app que se importa no requiere {} y se le pude asignar el nombre diferente
const nombreTarea = 'Pasear al perro';

export default nombreTarea;
 */
// clases en JavaScript , para pasar los argumento hacia el objeto se utiliza un constructor que se ejecutara primero,

/*
class Tarea{
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    //cuando se pasa una funcion por una clase esta se convierte en metodo
    mostrart(){
       console.log(`${this.nombre} tiene prioridad de ${this.prioridad}`);
    }
};

// como heredar una clase a otra, utilizando metodos de react , al tomar los atributos de una clase utilizando super tambien se toman los metodos de la clase
class ComprasPendientes extends Tarea{
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
};*/

// let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
// let tarea2 = new Tarea('Preparar Cafe', 'Alta');
// let tarea3 = new Tarea('Pasear al perro', 'Media');
// let tarea4 = new Tarea('Conocer a mis suegros', 'Baja');

// console.log(tarea1.mostrart());
// console.log(tarea2.mostrart());
// console.log(tarea3.mostrart());
// console.log(tarea4.mostrart());

//let compra1 = new ComprasPendientes('Jabon','Urgente',3);
// compra1.mostrart();
// console.log(compra1.hola());

//importar y exportar clases
export default class Tarea{
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrart(){
       console.log(`${this.nombre} tiene prioridad de ${this.prioridad}`);
    }
};






