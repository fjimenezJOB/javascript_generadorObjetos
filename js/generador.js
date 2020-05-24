/*
    Generador de objetos
    ---------------------

    1. Establecemos el objeto con el constructor
    2. Con un bucle generamos objetos random que se registren en un array.
    3. Que se impriman los objetos por consola.
*/

// Generamos el constructor del objeto.
function coche (marca, modelo, anyo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
    this.color = color;
}

// Generamos las variables que contienen la información que despues seran las propiedades aleatorias de cada objeto.
var marcas = ['Ford', 'Dodge', 'Audi', 'Lamborghini', 'Masseratti', 'Mercedes', 'Volkswagen', 'Peugeöt', 'Kia', 'Honda'];
var modelos = ['f30', 'g45', 'gj5', 'Muatang', 'Rober', 'Carnival', 'R45', 'h7', '5fr', '6fr'];
var anyos = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,2008,2020];
var colores = ['Azul', 'Amarillo', 'Verde', 'Celeste', 'Rojo', 'Negro', 'Veige', 'Rosa', 'Naranja', 'Marrón'];

// La variable objetos almacena los objetos generados automaticamente.
var objetos = [];

function objectGenerator() {
    /*
        Función que genera los objetos aleatoriamente y los impime en consola.
    */
    for (var i = 0; i < 10; i++) {

        var random = intRandom(0, 9);
        
        var marca = marcas[random];
        var modelo = modelos[random];
        var anyo = anyos[random];
        var color = colores[random];

        objetos.push(new coche(marca, modelo, anyo, color));
    }

    for(i = 0; i < objetos.length; i++) {
        console.log(`**************\nMarca: ${objetos[i].marca}\nModelo: ${objetos[i].modelo}\nAño: ${objetos[i].anyo}\nColor: ${objetos[i].color}\n**************\n`);
    }
}

function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

objectGenerator();