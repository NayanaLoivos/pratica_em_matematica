//#DIVISORES DE UM NÚMERO
    //Como encontrar os divisores de um número?
        //Precisamos fatorar o número e encontrar quem são os fatores do número.

    //#FATORAÇÃO
    //Quem participa da operação de multiplicação?
        //6 * 7 * 4 = 168
        //6, 7, 4 são fatores dessa multiplicação.
        //168 é o produto (resultado).

    //#APLICAÇÃO
        //Como encontrar todos os números primos entre 1 e n?
            //Fatoramos e se o número tiver apenas dois fatores possível, ele tem que ser primo.
            //Em outras palavras, um número primo possue apenas dois divisores, e sabemos identificar
            //se um número é dividor do outro, dessa forma, encontrando todos os divisores do número,
            //e se só encontrarmos dois, então, esse número é primo.

        //Mas como fatoramos ou como encontrarmos os divisores de um número?
            //Não precisamos saber se um número é divisível por 1 porque todo número é divisível por 1.
            //Então vejamos se fazemos 8 % 2, vemos que 2 é um fator de 8, ou melhor, 2 é um fator primo de 8
            //porque 2 é um número primo. E isso já nos leva a conclusão que não pode ser primo porque
            //possue mais de dois divisores comuns: 1, 2, 4, 8.
function is_divisor(num, divisor) {
    let is_even = num % divisor == 0;
    return is_even;
}
function is_prime(num) {
    let prime_result = null;
    let divisors = [1];
    for (let i = 2; i <= num; i++) {
        if (is_divisor(num, i)) {
            divisors.push(i);
        }
    }
    if (divisors.length == 2) {
        prime_result = `Os divisores de ${num} são: [${divisors}], portanto, ${num} é primo!`;
    console.log(prime_result);
    } else {
        prime_result  = `Os divisores de ${num} são: [${divisors}], portanto, ${num} não é primo!`;
        console.log(prime_result);
    }
}
is_prime(10);




























        //Como decompor número n em fatores primos?


    