//Acceder a los elementos de un Array

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")
const numbers = [1, 2, 3, 4, 5]

document.write("El arreglo en su primera posicion es "+numbers[0]+"<br>");
document.write("El arreglo en su segunda posicion es "+numbers[1]+"<br>");
document.write("El arreglo en su tercera posicion es "+numbers[2]+"<br>");
document.write("El arreglo en su cuarta posicion es "+numbers[3]+"<br>");
document.write("El arreglo en su quinta posicion es "+numbers[4]+"<br>");

//Usar variables para acceder a los elementos de un array

document.write("<h3>USAR VARIABLES PARA ACCEDER A LOS ELEMENTOS DE UN ARRAY</h3>")
let index = 4

document.write("La variable index corresponde a: "+numbers[index]+"<br>");

//Modificar los elementos de un array

document.write("<h3>MODIFICAR LOS ELEMENTOS DE UN ARRAY</h3>")
numbers[0] = 10
numbers[2] = 30

document.write("La modificacion fue:  "+numbers[0]+"<br>");

//La longitud de un array

document.write("<h3>LA LONGITUD DE UN ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]
document.write("El array de frutas es: "+frutas+"<br>")
document.write("El array de frutas tiene una longitud de: "+frutas.length+"<br>")

//La longitud de un array con length

document.write("<h3>LA LONGITUD DE UN ARRAY CON LENGTH</h3>")

const frutass = ["manzana", "pera", "plátano", "fresa"]
frutass.length = 2

document.write("El array de frutas es: "+frutass+"<br>")
document.write("El array de frutas tiene una longitud de: "+frutass.length+"<br>")

//Métodos de arrays

document.write("<h3>METODOS DE ARRAYS</h3>")

//.PUSH

document.write("<h3>.push</h3>")

const frutasp = ["plátano", "fresa"]
frutasp.push("naranja")

const frutaspp = ["plátano", "fresa"]
document.write("El array de frutas tiene una longitud de: "+frutaspp.length+"<br>")

const newLength = frutaspp.push("naranja")
document.write("El array de frutas tiene una longitud de: "+newLength+"<br>")
document.write("El array de frutas es: "+frutaspp+"<br>")

//.POP

document.write("<h3>.POP</h3>")

const frutaso = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutaso.pop()

document.write("El array de frutas es: "+frutaso+"<br>")
document.write("El array de frutas ultima es: "+ultimaFruta+"<br>")

//.SHIFT

document.write("<h3>.SHIFT</h3>")

const frutasi = ["plátano", "fresa", "naranja"]
const primeraFruta = frutasi.shift()

document.write("El array de frutas es: "+frutasi+"<br>")
document.write("El array de frutas primera es: "+primeraFruta+"<br>")

//.UNSHIFT

document.write("<h3>.UNSHIFT</h3>")

const frutasu = ["plátano", "fresa", "naranja"]
frutasu.unshift("manzana")

document.write("El array de frutas agregando una al inicio es: "+frutasu+"<br>")

//CONCATENAR ARRAYS

document.write("<h3>CONCATENAR ARRAYS</h3>")

const numberss = [1, 2, 3]
const numberss2 = [4, 5]
const allNumbers = numberss.concat(numberss2)

document.write("El array de numbers se concatenan en una misma linea como muestra: "+allNumbers+"<br>")

//CONCATENAR ARRAYS DE OTRO MODO

document.write("<h3>CONCATENAR ARRAYS DE OTRO MODO</h3>")

                   
const allNumbersS = [...numberss, ...numberss2]

document.write("El array de numbers se concatenan en una misma linea como muestra: "+allNumbersS+"<br>")