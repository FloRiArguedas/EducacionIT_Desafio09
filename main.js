import "./css/style.css";

//Desafio 09 - Floricela Arguedas

//? UNO
console.warn("Ejercicio 1");

//1. Inventario de Frutas: Crea un array llamado frutas con al menos 5 frutas. Utiliza pop para eliminar la última fruta y mostrarla por consola. Luego, usa push para agregar "mango" al final del array.

let frutas = ["Kiwi", "Pera", "Mango", "Banano", "Cereza", "Guayaba"];
console.log(frutas);
console.log("Sacando la fruta... " + frutas.pop());
console.log(frutas);
console.log("Insertando una fruta");
frutas.push("Mango");
console.log(frutas);

//? DOS
console.warn("Ejercicio 2");

//2. Lista de Tareas: Declara un array tareas con 3 tareas pendientes. Usa shift para eliminar la primera tarea y mostrarla por consola como "Tarea completada".  Añade una nueva tarea al principio del array con unshift.

let TareasPendientes = [
  "Limpiar el piso",
  "Comprar el alimento de Moka",
  "Cambiar el bombillo",
];
console.log(TareasPendientes);
console.log("Tarea Completada..." + TareasPendientes.shift());
console.log("Nueva Tarea a realizar...");
TareasPendientes.unshift("Hacer las compras");
console.log(TareasPendientes);

//? TRES
console.warn("Ejercicio 3");

//3. Fila de Espera: Simula una fila de espera con un array clientes.  Añade 2 nuevos clientes al final de la fila con push.  Atiende al primer cliente usando shift y muestra su nombre por consola.

let FilaEspera = ["Eduardo Mora", "Sandra Arguedas", "Sergio Jimenez"];
console.log(FilaEspera);
console.log("Nuevos Clientes en la Fila de Espera...");
FilaEspera.push("Sundry Montoya", "Sandra Castro");
console.log(FilaEspera);
console.log("Atendiendo a..." + FilaEspera.shift());
console.log(FilaEspera);

//? CUATRO
console.warn("Ejercicio 4");

//4. Rotación de Elementos: Crea un array numeros con 5 números. Utiliza pop para sacar el último número y luego unshift para agregarlo al principio. Repite este proceso 3 veces y observa cómo cambian las posiciones.

let Elementos = [3, 8, 12, 23, 16];
console.log(Elementos);
for (let i = 1; i < 4; i++) {
  console.log([i] + " Eliminando Elemento Final...");
  let cambiando = Elementos.pop();
  console.log(Elementos);
  console.log("Añadiendo Elemento al inicio...");
  Elementos.unshift(cambiando);
  console.log(Elementos);
}

//? CINCO
console.warn("Ejercicio 5");

//5. Carrito de Compras:  Declara un array carrito vacío. Permite al usuario agregar 3 productos al carrito con push. Luego, dale la opción de eliminar el último producto agregado usando pop.

let CarritoCompras = [];
for (let i = 1; i < 4; i++) {
  let productonuevo = prompt("Digite el producto " + [i] + " que desea añadir");
  CarritoCompras.push(productonuevo);
  console.log("Productos en el carrito..." + CarritoCompras);
}

let EliminarUltimo;

let respuesta = prompt("Digite 'si', si desea eliminar el último producto o 'no', si desea conservarlo");

if (respuesta === 'si'){
    EliminarUltimo = true;
}else{
    EliminarUltimo=false;
}

if (EliminarUltimo === true) {
  console.log("Eliminando el último producto añadido..." + CarritoCompras.pop());
  console.log("Productos en el carrito..." + CarritoCompras);
}else {
    console.log ('No se eliminó ningún producto del carrito')
}

//? SEIS
console.warn("Ejercicio 6");

//6. (map) Doblar Valores:  Dado un array valores con números, crea un nuevo array dobles donde cada elemento sea el doble del valor original usando map.

let Valores = [3, 6, 10, 15];
console.log("Valores Originales " + Valores);

let ValoresDuplicados = Valores.map(function (numero) {
  return numero * 2;
});

console.log("Valores Duplicados " + ValoresDuplicados);

//? SIETE
console.warn("Ejercicio 7");

//7. (map) Nombres en Mayúsculas: Convierte todos los nombres de un array nombres a mayúsculas utilizando map.

let nombres = ["floricela", "eduardo", "sergio", "sandra", "sundry"];
console.log("Colección de Nombres " + nombres);
let nombresMayus = nombres.map(function (nombre, indice) {
  return nombre.toUpperCase();
});
console.log("Colección de Nombres en Mayúscula " + nombresMayus);

//? OCHO
console.warn("Ejercicio 8");

//8. (map) Precios con IVA:  Tienes un array precios con precios sin IVA. Calcula un nuevo array precios Con IVA donde cada precio incluya un IVA del 21%.

let precios = [200, 1100, 2500, 3250, 4200, 16850];
console.log("Precios sin IVA " + precios);
let preciosIVA = precios.map(function (precio) {
  return precio + precio * 0.21;
});
console.log("Precios con IVA " + preciosIVA);

//? NUEVE
console.warn("Ejercicio 9");

//9. (map) Cuadrados de Números:  Crea un array numeros del 1 al 10. Obtén un nuevo array cuadrados donde cada elemento sea el cuadrado del número original.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Colección de números " + nums);
let numsPotenciados = nums.map(function (numero) {
  return numero * numero;
});
console.log("Números Elevados al cuadrado " + numsPotenciados);

//? DIEZ

console.warn("Ejercicio 10");
//10. (filter) Números Pares:  Filtra un array numeros para obtener solo los números pares.

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 32, 41, 56, 66, 73, 88, 94, 102,
];
console.log("Este es el array " + numbers);

let pares = numbers.filter(function (number) {
  if (number % 2 === 0) {
    return number;
  }
});

console.log("Este es el array de pares " + pares);

//? ONCE

console.warn("Ejercicio 11");
//11. (filter) Palabras Largas:  Encuentra las palabras de más de 5 letras en un array palabras.

let palabras = [
  "frijol",
  "Maiz",
  "Floricela",
  "Arguedas",
  "Kiwi",
  "Regalo",
  "Bitacora",
  "Git",
  "Educacion IT",
];
console.log("Este es el array de palabras..." + palabras);

let longer = palabras.filter(function (string) {
  if (string.length > 5) {
    return string;
  }
});

console.log("Las palabras largas del array son: " + longer);

//? DOCE

console.warn("Ejercicio 12");
//12. (filter) Productos en Oferta:  Tienes un array productos con objetos que tienen propiedades nombre y precio. Filtra los productos que estén en oferta (precio menor a $500).

let productos = [
  {
    nombre: "TV",
    precio: 500,
  },
  {
    nombre: "Microhondas",
    precio: 250,
  },
  {
    nombre: "Refrigeradora",
    precio: 1250,
  },
  {
    nombre: "Lámpara",
    precio: 135,
  },
  {
    nombre: "Celular",
    precio: 425,
  },
  {
    nombre: "Horno",
    precio: 550,
  },
  {
    nombre: "Sillones",
    precio: 890,
  },
];

console.log("Estos son los productos del inventario: ")
//Se recorren para mostrarlos
for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}

console.log("-----------------------------------------------------------")
//Se usa filter para recorrer y filtrar según precio
let productosOferta = productos.filter(function (producto) {
  if (producto.precio < 500) {
    return productos;
  }
});
//Se recorren para mostrarlos
console.log("Estos son los productos del inventario que están en oferta: ");
for (let i = 0; i < productosOferta.length; i++) {
  console.log(productosOferta[i]);
}


//? TRECE

console.warn("Ejercicio 13");
//13. (filter) Estudiantes Aprobados:  Filtra un array estudiantes (objetos con propiedades nombre y nota) para obtener solo a los estudiantes con notas mayores o iguales a 7.

let Estudiantes = [
  {
    nombre: "Floricela",
    nota: 8.5,
  },
  {
    nombre: "Eduardo",
    nota: 8,
  },
  {
    nombre: "Sergio",
    nota: 9,
  },
  {
    nombre: "Jose",
    nota: 6.8,
  },
  {
    nombre: "Cristopher",
    nota: 6,
  },
  {
    nombre: "Helena",
    nota: 7,
  },
  {
    nombre: "Silvia",
    nota: 6.6,
  },
];

console.log("Estos son los estudiantes y sus calificaciones ")
//Se recorren para mostrarlos
for (let i = 0; i < Estudiantes.length; i++) {
  console.log(Estudiantes[i]);
}

console.log("-----------------------------------------------------------")
//Se usa filter para recorrer y filtrar según calificación
let estudiantesAprobados = Estudiantes.filter(function (producto) {
  if (producto.nota >= 7) {
    return Estudiantes;
  }
});

//Se recorren para mostrarlos
console.log("Estos son los estudiantes APROBADOS: ");
for (let i = 0; i < estudiantesAprobados.length; i++) {
  console.log(estudiantesAprobados[i]);
}

//? CATORCE

console.warn("Ejercicio 14");
//14. (filter) Tareas Completadas:  Dado un array tareas (objetos con propiedades descripcion y completada), filtra las tareas que estén marcadas como completadas.

let TareasPorHacer = [
  {
    Descripcion: "Lavar los trastes",
    completada: true,
  },
  {
    Descripcion: "Limpiar los vidrios",
    completada: false,
  },
  {
    Descripcion: "Hacer el Desafio",
    completada: true,
  },
  {
    Descripcion: "Lavar la Ropa",
    completada: false,
  },
  {
    Descripcion: "Estudiar Inglés",
    completada: true,
  }
];

console.log("Estas son las tareas por hacer ")
//Se recorren para mostrarlos
for (let i = 0; i < TareasPorHacer.length; i++) {
  console.log(TareasPorHacer[i]);
}

console.log("-----------------------------------------------------------")

//Se usa filter para recorrer y filtrar según estado
let TareasCompletadas = TareasPorHacer.filter(function (tareas) {
  if (tareas.completada === true) {
    return TareasPorHacer;
  }
});

//Se recorren para mostrarlos
console.log("Estas son las tareas COMPLETADAS ");
for (let i = 0; i < TareasCompletadas.length; i++) {
  console.log(TareasCompletadas[i]);
}


//? QUINCE

console.warn("Ejercicio 15");
//15. (forEach) Mostrar Lista: Imprime por consola cada elemento de un array nombres utilizando forEach.

let NombresArray = ['Floricela', 'Eduardo', 'Luis', 'Gustavo', 'Sergio', 'Bernarda', 'Carolina']
console.log('Lista de nombres del array: ')
NombresArray.forEach(function(Name){
  console.log(Name)
})

//? DIECISEIS

console.warn("Ejercicio 16");
//16. (forEach) Sumar Edades:  Calcula la suma de las edades de un array edades usando forEach.

let Edades = [30,15,22,14,29,18]
let sumatemp =0;
console.log ('Las edades son: ')
Edades.forEach(function(edades){
  console.log (edades)
  sumatemp= sumatemp + edades
})
console.log ('La suma total de las edades es: '+ sumatemp)


//? DIECISIETE

console.warn("Ejercicio 17");
//17. (forEach) Aplicar Descuento:  Tienes un array productos (objetos con nombre y precio). Aplica un descuento del 10% a cada producto usando forEach.

let products = [
  {
    nombre: "Televisor",
    precio: 350000,
  },
  {
    nombre: "Binoculares",
    precio: 25000,
  },
  {
    nombre: "Celular",
    precio: 128000,
  },
  {
    nombre: "Foco de Cabeza",
    precio: 23500,
  }
];

console.log('Estos son los productos y su precio en colones: ')
products.forEach(function(inventario){
  console.log(inventario)
})

//FOR EACH PARA APLICAR DESCUENTO
console.log('-----------------------------------------------------')
console.log('Estos son los productos con su respectivo descuento: ')

products.forEach(function(inventario){
  inventario.precio = inventario.precio - (inventario.precio * 0.10) 
})

products.forEach(function(inventario){
  console.log(inventario)
})


//? DIECIOCHO

console.warn("Ejercicio 18");
//18. (forEach) Enviar Invitaciones:  Simula el envío de invitaciones por correo electrónico a cada persona de un array invitados utilizando forEach (puedes imprimir un mensaje de "Invitación enviada a [nombre]" por consola).

let invitados = ['Eduardo Mora','Sergio Jiménez', 'Camila Jaén', 'Sandra Arguedas']

invitados.forEach(function(invitado){
  console.log ('Invitación enviada a:  ' + invitado)
})