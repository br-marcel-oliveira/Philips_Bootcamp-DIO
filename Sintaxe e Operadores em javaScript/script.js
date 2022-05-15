
function numeros() {
    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;
    let resultado10;
    let resultado20;

    if (!n1 || !n2) {
        alert('Erro = patametros inválidos!')
        numeros()
    } else {
        resultado = n1 + n2;
        resultado > 10 ? resultado10 = 'que é maior que 10' : resultado10 = 'que é menor que 10';
        resultado > 20 ? resultado20 = 'que é maior que 20' : resultado20 = 'menor que 20.';

        n1 === n2 ? alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, ${resultado10} e ${resultado20}`) : alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${resultado}, ${resultado10} e ${resultado20}`);
    }
}
numeros();



