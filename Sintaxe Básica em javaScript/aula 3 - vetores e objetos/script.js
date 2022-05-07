// o que são vetores ou arrays

//como declarar um array
/* let array = ['string', 1, true];
console.log (array); */

// pode guardar vários tipos de dados

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log (array);

// forEach() - itera um array
/* array.forEach(function(item, index){console.log(item, index)}); */

// push() - add item no final do array
/* array.push('novo item');
console.log(array); */

// pop() - remove item no final do array
/* array.pop();
console.log(array);   */

//shift() - remove item no inicio do array
/* array.shift();
console.log(array); */

//unshift() - add item no inínio do array
/* array.unshift('marcel');
console.log(array); */

//indexOf() - retorna o índice de um valor;
/* console.log(array.indexOf('string')); */

//splice() - remove ou substitui um item pelo índice
/* array.splice(0, 3);
console.log(array); */

//slice() - retorna uma parte de um array existente
/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

// OBJETOS

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}
console.log(object.objectInterno);

//Desestruturação do Objeto

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var{ string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
