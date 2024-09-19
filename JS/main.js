let numerosocio = prompt ("Bienvenido, por favor coloque numero de socio")
console.log ("Bienvenido socio N°" + numerosocio)

function multiplicar1 () {
    let popular = parseInt (prompt("ingrese cantidad de entradas"))
    let valor = 3000
    let resultado = popular * valor 
    alert (popular+ "*" + valor + "=" + resultado)
} 

function multiplicar2 () {
    let plateaA = parseInt (prompt("ingrese cantidad de entradas"))
    let valor = 4000
    let resultado = plateaA * valor 
    alert (plateaA+ "*" + valor + "=" + resultado)
} 

function multiplicar3 () {
    let plateaB = parseInt (prompt("ingrese cantidad de entradas"))
    let valor = 5000
    let resultado = plateaB * valor 
    alert (plateaB+ "*" + valor + "=" + resultado)
} 

let menu = parseInt (prompt("calcule el valor de las entradas: \n 1-Popular \n 2-Platea alta \n 3-Platea baja \n 4-Salir"))

while(menu !== 4) {
    switch (menu) {
        case 1:
            multiplicar1()
            break
        case 2:
            multiplicar2()
            break
        case 3:
            multiplicar3()
            break
        default:
            alert("opcion incorrecta")
            break
    }

  menu = parseInt (prompt("calcule el valor de las entradas: \n 1-Popular \n 2-Platea alta \n 3-Platea baja \ 4-Salir"))
}

const jugador1 = {
    jugador: "Agustin Gallo",
    dorsal: 9,
    goles: 11
}

const jugador2 = {
    jugador: "Franco Toloza",
    dorsal: 18,
    goles: 9
}

const jugador3 = {
    jugador: "Thiago Calone",
    dorsal: 10,
    goles: 7
}

const jugador4 = {
    jugador: "Tomas Assennato",
    dorsal: 11,
    goles: 6
}

const jugador5 = {
    jugador: "Hernan Grana",
    dorsal: 4,
    goles: 3
}

const goleadores = [jugador1, jugador2, jugador3, jugador4, jugador5]

for(const goleador of goleadores) {
    console.log(goleador)
}


