//Funciòn que tome array, elimine duplicados y devuelva los elementos únicos
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6])); // Devuelve [1, 2, 3, 4, 5, 6]