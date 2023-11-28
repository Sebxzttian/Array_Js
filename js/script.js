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