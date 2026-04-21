//Palíndromo
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Elimina espacios y caracteres no alfanuméricos, y convierte a minúsculas
    const reversedStr = cleanedStr.split('').reverse().join('');  // Invierte la cadena limpia
    return cleanedStr === reversedStr; // Compara la cadena limpia con su versión invertida
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Devuelve true   
console.log(isPalindrome("Hello, World!")); // Devuelve false
console.log(isPalindrome("123321")); // Devuelve true