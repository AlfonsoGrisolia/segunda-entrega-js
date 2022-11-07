let numero = 1
while (numero <= 10) {//
    console.log(numero)
    numero ++
}
console.log('fin de los numeros '+numero)
//busque informacion de como generar un nuemero random del 1 al 10 en internet
let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1; 
console.log(numeroMaquina)

let vidas = 3
let numeroUsuario = parseInt(prompt('Adivina el numero del 1 al 10'))

while(numeroMaquina !== numeroUsuario && vidas > 1){
    let mensaje = (numeroMaquina > numeroUsuario) ? 'el numero es mayor' : 'el numero es menor'


    console.log('te equivocaste')
    numeroUsuario = parseInt(prompt('le erraste, eleji denuevo un numero del 1 al 10 ' + mensaje))
    vidas --

}



if (numeroMaquina === numeroUsuario){
    alert('Adivinaste el numero!! GANASTE')
    console.log('ganaste')
}
else{
    alert('Perdiste, no lograste adivinar el numero')
    console.log('perdiste burrito')
}
