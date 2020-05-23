/*
    Generador de objetos
    ---------------------

    1. Establecemos el objeto con el constructor
    2. Con un bucle le preguntamos al usuario que registre los objetos en un array
    3. Que se impriman los objetos por pantalla.
*/


function coche (marca, modelo, anyo, color, numeroPuertas) {
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
    this.color = color;
    this.numeroPuertas = numeroPuertas;
}

var objetos = [];

function objectGenerator() {

    for (var i = 0; i < 10; i++) {

        // var marca = prompt(`Coche${i+1} -> Marca:`);
        // var modelo = prompt(`Coche${i+1} -> Modelo:`);
        // var anyo = prompt(`Coche${i+1} -> Año en que lo tuviste:`);
        // var color = prompt(`Coche${i+1} -> Color:`);
        // var numPuertas = prompt(`Coche${i+1} -> Numero de puertas:`);

        var marca = 'Ford';
        var modelo = 'Mustang';
        var anyo = 2020;
        var color = 'Verde';
        var numPuertas = 5;

        objetos.push(new coche(marca, modelo, anyo, color, numPuertas));
    }

    for(i = 0; i < objetos.length; i++) {
        console.log(`Marca: ${objetos[i].marca}\nModelo: ${objetos[i].modelo}\nAño: ${objetos[i].anyo}\nColor: ${objetos[i].color}\nNúmero de Puertas: ${objetos[i].numeroPuertas}\n**********************\n`);
    }
}

objectGenerator();