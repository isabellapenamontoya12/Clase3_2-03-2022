const matricula = 900000
let creditos, descuento, totalM;

function LeerDatos(params) {
    creditos = Number(prompt('Ingrese cantidad de creditos'))
}
LeerDatos()
calcular(creditos)

function calcular(creditos) {
    if (creditos <= 6) {
        descuento = matricula * 0.5;
    }
    else if (creditos > 6 && creditos <= 10) {
        descuento = matricula * 0.25;
    }
    else if (creditos > 10) {
        descuento = 0;
    }
    else {
        alert('Opción no valida')
    }

    totalM = matricula - descuento
    return totalM
}

console.log(totalM)
alert(totalM)
