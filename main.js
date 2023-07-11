nota = 0
promedio = 0
total = 0
contador = 0

do {
    opcion = parseInt(prompt("ingrese 1 para cargar una nota, ingrese 2 para saber su promedio o ingrese 0 para salir" ))
    switch(opcion){
        case 0: 
            opcion = 0
            break
        case 1:
            nota = parseInt(prompt( "ingrese nota"))
            total =total + nota
            contador = contador + 1
            break
        case 2:
            if (contador>= 1 ) {
                promedios (contador, total)
                opcion = 0}
            else{
                alert("no ingreso su nota")
            }
            break
        default: alert("opcion invalida")
            break
    }
} while (opcion != 0)

function promedios(){
    promedio = total/contador
    alert("el promedio es de " + promedio)
}