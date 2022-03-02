import {suma} from './Suma.js'
import {resta} from './Resta.js'
import {multiplicacion} from './Multiplicacion.js'
import {division} from './Division.js'


let num1;
let num2;
let btnEj1 = document.getElementById('EJERCICIO1')
let btnEj2 = document.querySelector('#EJERCICIO2')
let btnEj3 = document.getElementById('EJERCICIO3')
let btnEj4 = document.querySelector('#EJERCICIO4')

let Resultado1 = document.getElementById('ResEj1')
let Resultado2 = document.getElementById('ResEj2')
let Resultado3 = document.getElementById('ResEj3')
let Resultado4 = document.getElementById('ResEj4')

function leerDatos(){
    num1 = Number(prompt('Ingrese Numero 1'));
    num2 = Number(prompt('Ingrese Numero 2'));
}


btnEj1.addEventListener('click', () => {
    leerDatos()
    console.log(suma(num1, num2))
    console.log(`La Suma es ${suma(num1, num2)}`)
    Resultado1.innerHTML = `La Suma es ${suma(num1, num2)}`
})

btnEj2.addEventListener('click', () => {
    leerDatos()
    console.log(resta(num1, num2))
    console.log(`La Resta es ${resta(num1, num2)}`)
    Resultado2.innerHTML = `La Resta es ${resta(num1, num2)}`
})
btnEj3.addEventListener('click', () => {
    leerDatos()
    console.log(multiplicacion(num1, num2))
    console.log(`La Multiplicacion es ${multiplicacion(num1, num2)}`)
    Resultado3.innerHTML = `La Multiplicacion es ${multiplicacion(num1, num2)}`
})

btnEj4.addEventListener('click', () => {
    leerDatos()
    console.log(division(num1, num2))
    console.log(`La División es ${division(num1, num2)}`)
    Resultado4.innerHTML= `La División es ${division(num1, num2)}`
})