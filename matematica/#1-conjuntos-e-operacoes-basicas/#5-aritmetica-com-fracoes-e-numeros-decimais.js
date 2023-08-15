//"SABER EXATAMENTE O QUE VOCÊ ESTÁ FAZENDO, NOS PERMITE CONSTRUIR NOVAS NOÇÕES.
//QUANDO ENTEMOS O QUE FAZEMOS, ASSUMIMOS ESSAS IDEIAS COMO REPERTÓRIO, OU SEJA, 
//QUE VOCÊ CONSEGUE USAR EM OUTRAS SITUAÇÕES QUE PRECISAR."

//Aprendemos que uma fração decorre da razão entre dois números inteiros.
//E que razão é simplesmente a divisão a que a fração se refere.
//Concluimos que fração, divisão e razão são termos equivalentes para a mesma coisa.
//Sabemos agora que existe mais de uma forma de representar a mesma proporção com números
//com isso, vemos que a fração é a representação de uma proporção qualquer. Então:
console.log(2/4 === 1/2); //true
//Temos em conta que pegar duas fatias de uma pizza dividida em 4 partes iguais, 
//é equivalente a pegar metade da pizza que é 1/2. Portanto, 2/4 e 1/2 são representações
//equivalentes da mesma proporção.
//De forma menos visual, podemos chegar nesse mesmo resultado se você multiplicar uma
//fração, ou seja, multiplicar o seu numerador e seu denominador pelo mesmo valor, 
//consequentemente não alteramos a proporção dessas frações. PORQUE?
//Porque é equivalente a você multiplicar e dividir. COMO ASSIM?
let numerador = 1 * 2;
let denominador = 2 * 2;
console.log(`${numerador}/${denominador}`);
//O fato de estarmos multiplicando em cima e em baixo pelo mesmo número quer dizer que
//estamos multiplicando o numerador por 2, mas também estamos dividindo por 2 porque 
//quando manipulamos o denominador estamos mexendo na divisão.

//#SIMPLIFICANDO FRAÇÃO
    //Já podemos representar uma proporção por vários números diferentes, é razoável pensar 
    //sobre qual seria a forma mais simples possivel de representar essa proporção. 
    //Simplificar a fração é chegar no menor numerador possível, esse ponto é quando
    //já não é viável dividir o numerador e denominador por um termo comum.
    let numerador2 = 10 / 10;
    let denominador2 = 100 / 10;
    console.log(`${numerador2}/${denominador2}`);
    //Da mesma forma que vimos antes, se dividirmos em cima e em baixo pelo mesmo número
    //a proporção também é a mesma: 1 / 10. Portanto, 10/100 é equivalente a 1/10.
    //Se iniciamos a simplificação da fração 10/100 dividindo por 2, cheagariamos a 5/50,
    //que também tem a mesma proporção ded 10/100, porém, 5/50 não é a forma mais simples
    //dessa fração porque ainda conseguimos dividir numerador e denominador por 5.
    //PS1: Mesmo que consigamos dividir o numerador e denominador por um número comum,
    //existe um máxima divisor comum entre esses dois entes que chamamos de MDC.
    //Quando obtemos esse número, a simplicação poderá ser concluída de forma mais precisa.
    //PS2: Quando então chegamos no resultado máximo de simplificação de uma fração dizemos que
    //esses números são primos entre si. Não é que no final sempre chegamos a números primos individualmente,
    //mas sim a números primos entre si, que quer dizer que não conseguimos mais dividir ambos 
    //por um número comum sem obtermos um resto. 4/5 por exemplo, o 4 não é primo, mas o 5 é primo indidualmente, 
    //mas 4/5 são primos entre si, é dizer de uma fração irredutível.

//#DIVISÃO DE NUMEROS INTEIROS (FRAÇÃO)
    console.log(1/10); //0.1
    //a divisão não possue a propriedade de fechamento como a adição, pois dividir 
    //dois números inteiros pode não resultar em um número inteiro, ou seja, no mesmo conjunto.
    //As propriedades das operações podem ser analisadas  em relação ao conjunto em que estamos 
    //operando. Se você considerar conjuntos mais amplos que os inteiros, por exemplo os racionais, 
    //então a divisão será fechada com exceção da divisão por 0.

//#SOMA DE NÚMEROS INTEIROS (FRAÇÃO)
    //COMO CALCULAR?
        //1/2 + 2/3 
        //Quando temos denominadores diferentes, isso quer dizer que temos divisões em partes diferentes.
        //E precisamos compatibilizar isso, ter divisões iguais, ou seja, chegar a um mesmo denominador 
        //para ambas as frações.
        //Um mesmo denominador permite que possamos fazer comparações bem como aplicar a soma.
        //Partindo do presuposto que todas as divisões são iguais, se divimos cada pedaça da fração 1/2 
        //para 3 e cada pedaço da fração 2/3 para 2, vemos que conseguimos compatibilizar essa divisão 
        //encontrando 6 partes iguais em ambas as divisões.
    //E DESSAS PARTES REPRESENTA AS FRAÇÕES EM QUESTÃO?
        //1/2 representar pegar 3 pedaços que é metade da pizza.
        //2/3 representar pegar 1/3 + 1/3 que é 2/3 da pizza.
        //Concluimos que estamos pegando 3 pedaços de uma divisão por 6 = 3/
        //e 4 pedaços de uma divisão por 6 = 2/6.
        //E temos a equivalência de 1/2 e 3/6, 2/3 e 4/6.   
        //Somando temos: 3/6 + 4/6 = 7/6.    
        //COMO PODEMOS ENXERGAR 7/6 POR OUTRA ÓTICA?
            //7/6 quer dizer que temos mais pedaços do que era necessário para compor uma parte inteira. Então,
            //7/6 é igual 6/6 + 1/6
            //Como vemos que o numerador é maior que o denominador, podemos tirar uma quantidade
            //igual do denominador dessa parcela e vemos que a soma é a mesma, ou seja, 7/6.
            //Dessa forma, constatamos que 6/6 é igual a 1, isso quer dizer que temos 1 inteiro
            //e 1/6. Isso é conhecido como número misto, que possui uma parte inteira e uma parte
            //fracionada. E se imaginamos as duas pizzas que era 3/6 e a outra 4/6 vemos que 
            //possuimos 3 pedaços da primeira pizza dividida em 6 e 4 pedaços da segunda pizza 
            //divida em 6, isso quer dizer se juntarmos as metades das pizza, 
            //teremos uma pizza inteira (6 pedaços) e sobra mais 1 pedaço que é 1 pedaço de uma
            //pizza dividida em 6.

    //#SUBTRAÇÃO DE NÚMEROS INTEIROS (FRAÇÃO)
        //COMO CALCULAR?
        //Como vimos, a substração nada mais é que uma adição que troca o sinal do outro número que é negativo.
        //1/2 - 2/3 
        //Ja sabemos que precisamos encontrar um denominador em comum, então, 
        //3/6 - 4/6 = -1/6
        //O resultado claramente é uma fração negativa, porque 2/3 é maior que 1/2.

    //REDIZNDO FRAÇÃO ANTES DE OPERAR SOMA OU SUBTRAÇÃO
    //Podemos reduzir as fração sempre que for necessário, isso facilita as operações 
    //com fração porque as tornas frações mais simples.
    //40/16 + 8/20 pode ficar:
    //10/4 + 4/10 e podemos simplificar ainda mais:
    //5/2 + 2/5 e agora podemos executar a operação de igualar os denominadores:
    //25/10 + 4/10 com mesmo denominador somamos o resultado:
    //29/10.

//COMO SABER QUAL PROPORÇÃO É MAIOR?
    //MESMA BASE
    //Quando temos o mesmo denominador, ou seja, a mesma parte é mais fácil, por exemplo,
    //entre 25/10 + 4/10, 25/10 é maior obviamente.
    //BASES DIFERENTE
    //Quando não temos a mesma base, devemos analisar
    //2/5 - 5/2 sabemos que temos 2 pedaços de 5 partes e 5 pedaços de 2 partes.
    //Opa! caimos numa fração que tem parte inteira, é óbivio que a fração que
    //tem uma parte completa é maior.
    //5/2 que é igual a 2/2 + 2/2 + 1/2 que é igual a 2 1/2.
    //O mesmo se aplica se temos que subtrair
    //4/7 - 3, 3 é maior porque temos 3 partes inteiras.
    //os inteiros tbm pode ser vistos assim: 3/1 e assim para qualquer parte inteira, 
    //porque qualquer número dividido por 1 é igual a ele mesmo.
    //4/7 - 21/7 = -17/7.

    //#MULTIPLICAÇÃO DE NÚMEROS INTEIROS (FRAÇÃO)
        //É simplesmente multiplicar, não precisamos mexer nos denominadores.
        //1/2 * 2/3 = 2/6 = 1/3, ou você corta o 2 em cima e embaixo diretamente
        //1/2 * 2/3 = 1*2/2*3 = 1/3

    //#DIVISÃO DE NÚMEROS INTEIROS (FRAÇÃO)
        //Até agora emos os inteiros não negativos (que são os naturais),
        //inteiros negativos, e divisão leva a gente muitas vezes a números quebrados (que são os racionais).
        //Dentro dos racionais, a multiplicação tem mais uma propriedade onde
        //todo número diferente de zero tem um número chamado inverso multiplicativo.
        //O QUE É INVERSO MULTIPLICATIVO?
            //Se pegamos o 4, vai existir dentro dos números racionais um outro número que multiplicado 
            //por 4 resulta no elemento neutro da multiplicação que é '1', ou seja, 
            //4 * 1/4 = 4/1 * 1/4 = 4/4 que é igual a 1.
        //O QUE O INVERSO MULTIPLICATIVO TEM HAVER COM A DIVISÃO?
            //Quando pensamos na divisão entre dois números inteiros
            //6/3 podemos usar essa divisão como: 6 * 1/3 (inverso multiplicativo do 3).
        //QUAL A MOTIVAÇÃO DA DIVISÃO OLHANDO PARA O INVERSO MULTIPLICATIVO?
            //A divisão das frações será uma multiplicação onde matemos a primeira fração e
            //multiplicamos pelo inverso da segunda. Por exemplo: 3/4 / 2/3  resulta em
            //3/4 * 3/2 = 9/8.
            //Isso vem da relação que a divisão tem com a multiplicação, assim como
            //a subtração tem com a soma. Então, dividir um número pelo outro é
            //pegá-los e multiplicar pelo inverso multiplicativo do outro.
            //E o inverso multiplicativo é simplesmente uma troca, ou seja, quem está
            //em cima vai para baixo e quem está em baixo vai para cima.
            //Portanto o inverso multiplicativo de 3 é 1/3, de 2/3 é 3/2 e assim por diante.
        //COMO PENSAR NA DIVISÃO?
            //4 dividido 2 = 2
            //Mas sempre que olhar para uma divisão, pense nela como 
            //o produto do primeiro número e o inverso multiplicativo do segundo.
            //QUEM É O INVERSO MULTIPLICATIVO DE 2? 
            //1/2, então,
            //4 * 1/2 = 4/2 = 2/1 = 2.
            //Sempre faça a pergunta: - qual número que multiplicado por 2 resulta 1?
            //1/2 
            //POR QUE?
            //porque 2 * 1/2 = 2/2 = 1.
            //PS: Dessa forma conseguimos entender porque as coisas em matemática
            //são do jeito que são.
            //O mesmo raciocínio vale para duas frações:
            //2/5 / 3/7 = 2/5 * 7/3
            //qual número que multiplicado por 3/7 resulta em 1?
            //é o seu inverso, ou seja, 3/7 * 7/3 = 21/21 = 1.

        //REFLEXÃO
            //Quando conseguimos observar uma operação como inverso da outra,
            //conseguimos concluir que na verdade só existe uma dentre elas, ou seja, 
            //só existe soma não existe subtração, só existe multiplicação não existe divisão.
            //pois em essência são a mesma coisa.















    
















