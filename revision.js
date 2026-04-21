function encontrarMaxMin(arr) {
    // Validación básica
    if (arr[0] === undefined) {
        return { max: null, min: null };
    }

    // Inicializamos con el primer elemento
    let maximo = arr[0];
    let minimo = arr[0];

    // Recorremos manualmente
    for (let i = 0; arr[i] !== undefined; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i];
        }

        if (arr[i] < minimo) {
            minimo = arr[i];
        }
    }

    return { max: maximo, min: minimo };
}


// Ejemplo
const numeros = [3, 7, 2, 9, 4, 1];
const resultado = encontrarMaxMin(numeros);

console.log("Máximo:", resultado.max);
console.log("Mínimo:", resultado.min);

// function maxValue(arr) {
//     return Math.max(...arr);
// }