//#NÚMERO NATURAL
    //0,1,2,3 ...
//#NÚMERO NATURAL *
    //1,2,3 ...    
    //pertencem ao conjunto dos N.
    //Não existe um último número natural, é infinito, mas no computador não existe essa noção de um número infinito de coisas,
    //infinito não é um número. Não podemos dizer: "tenho infinitos chicletes", "infinitos computadores" etc.
    //Como o computador é um dispositivo eletrônico e tem uma quantidade finita de recursos, portanto, não conseguimos representar
    //infinitos números. Existe um limite natural de representação de números que conseguimos alcançar e esperamos que seja tão 
    //grande quanto a nossa necessidade de representar.

//#ADIÇÃO (+)
    //Propriedades relevantes:
    //Comutatividade
    console.log(1 + 2 == 2 + 1) // 1 + 2 é igual a 2 + 1? Essa proposição tem o valor verdadeiro.

    //Associatividade
    console.log(1 + 2 + 3) //soma na ordem em que aparece.
    console.log(1 + (2 + 3)) //soma a partir de uma nova ordem estabelecida.

    console.log(2 + (3 + 1) == (1 + 2) + 3) //podemos combinar propriedades da adição.

    //Fechamento
    //O resultado de qualquer soma que se faça com números naturais será também um número natural,
    //ou seja, o resultado faz parte do mesmo conjunto.

    //Elemento neutro
    //Se incluído o '0' na operação de adição, não muda o resultado.
    console.log(7 + 0)

//#SUBTRAÇÃO (-)
    //Propriedades relevantes:  
    //Não é comutativa 
    console.log(7 - 3 != 3 - 7) // 7 - 3 é igual a 3 -7? Essa proposição tem o valor falso.

//#MULTIÇÃO (*)
    //Propriedades relevantes:  
    //Comutatividade
    console.log(7 * 8 == 8 * 7) //7 * 8 é igual a 8 * 7? Essa proposição tem o valor verdadeiro.

    //Associatividade
    console.log((7 * 8) * 9 == 8 * (7 * 9)) //multiplicação a partir de uma nova ordem estabelecida.
    //Fechamento
    //O resultado de qualquer multiplicação que se faça com números naturais será também um número natural,
    //ou seja, o produto estará dentro do conjunto dos número naturais.

    //Elemento neutro
    //Se incluído o '1' na operação de multiplicação, não muda o resultado.
    console.log(7 * 1)

//#DIVISÃO (/)
    8 / 2
    // 8 - dividendo
    // 2 - divisor
    // 4 - quociente
    // 0 - resto

    //Com o resto '0' dizemos que divisor divide o dividendo ou que o dividendo é divisível pelo divisor, 
    //ou seja, 2 divide 8 ou 8 é divisível por 2.

    9 / 2
    // 4 - quociente
    // 1 - resto

    9 % 2
    // Obtemos o resto da divisão com o operador módulo.

    //O resto deve ser sempre menor que o divisor, porque se ele for igual o maior, poderemos dividir de novo.

//O QUE PODEMOS CONCLUIR DESSAS OPERAÇÕES?
    //#SUCESSOR de um número natural
        //Podemos definir n + 1.
        //Dentro dos números naturais existe o conceito de sucessor, é quem vem depois.
        //Temos 10 símbolos: 0,1,2,3,4,5,6,7,8,9
        // Logo começamos a combiná-los: 10, 11, 12 ...
        function sucessor(n) {
            return n + 1;
        }
        console.log(sucessor(14))

    //#ANTECESSOR de um número natural
        //Podemos definir n - 1 ao menos que esse número seja '0', pois, não tem antecessor dentro dos números naturais.
        function antecessor(n) {
            if(n == 0) {
                return console.error('Dentro do conjunto dos números naturais, "0" não possui antecessor.');
            } else {
                return n - 1;
            }
        }
        console.log(antecessor(0))
    //#MÚLTIPLOS
        //Os múltiplos de um número são aqueles que são divisíveis por ele.
        //Quais os números múltiplos de 2? 
            //São todos os números que são divisíveis por 2.
            //E são os números que resultam de 2 * alguma coisa.
        console.log(8 / 2) //Resto '0' então 8 é divisível por 2.
        console.log(8 == 2 * 4) //2 * 4 também é uma representação do '8'.
        //Como encontramos os primeiros k múltiplos de 2, por exemplo?
        function multiplos(numero, qtd=10) {
            const resultadoMultiplos = [];
            for(i = 0; i < qtd; i ++) {
                resultadoMultiplos.push(i * numero);
            }
            return resultadoMultiplos;
        }
        console.log(multiplos(2, 15))
        //Todos os múltiplos de 2 são 2 * n. 
        //Por exemplo: 0, 2, 4, 6, 8, 10, 12 é igual 2*0, 2*1, 2*2, 2*3, 2*4, 2*5, 2*6 e é igual a 0, 0+2, 2+2, 4+2, 6+2, 8+2, 10+2.
        //Portanto, os números pares são múltiplos de 2, mas NÃO são potência de 2. Por exemplo: 6 não é potência de 2, mas é um número par.
    
    //#DIVISORES
        console.log([0,2,4,6,8,10,12])
            //São múltiplos de 2, são divisíveis por 2 e por sua vez o 2 é um divisor desses múltiplos.
        //Portanto o divisor dos múltiplos será o divisor que deixar resto '0' na divisão.
        //COMO CALCULAR OS DIVISORES DE UM NÚMERO?
        //Esse é um problema np, que na Matemática é dizer que não se sabe resolver esse problema de maneira eficiente.
        //Encontrar os divisores é primeiro resolver o problema da FATORAÇÃO EM PRIMOS.
        //Por exemplo dentro da segurança da informação temos a criptografia moderna onde encontramos números gigantes e se torna segura porque 
        //para se conseguir quebrá-la temos que encontrar os fatores primos desses números. Por outro lado, é importante para a criptografia 
        //que se tendo a resposta, que você consiga verificar de maneira rápida que de fato isso é uma resposta. Então se eu digo que 
        //3 e 11 são todos os divisores de 33, como você verifica se é verdade? É só multiplicar todos eles: 3*11 = 33. 
        //Portanto é fácil de verificar a resposta se a temos, mas é difícil de encontrar a resposta se não sabemos nada.     
        
    //PS: O conceito matemático de SOLUÇÃO GULOSA é quando se tenta solucionar um problema sempre olhando para o próximo passo que irá
         //te deixar mais perto da solução desse problema e por incrível que pareça, existem problemas que se fazemos isso você vai se limitar, 
         //vai travar e não vai conseguir chegar na solução ideal do problema.
         //Esse conceito se encaixa naquela pessoa que só procura conhecimento prático é um exemplo de Solução Gulosa, apesar de conseguir ir
         //avançando, vai chegar um momento que você vai travar porque você deixou de construir algumas outras coisa no caminho. Como consequência,
         //não chegará na melhor solução para o problema.
         //Exemplos de Solução Gulosa: problema da mochila e problema da moeda.

//#APLICAÇÃO: implementar JoquemPô com ordenação Circular        
        //pedra < papel < tesoura < pedra
        //ou seja, quem está no lado menor perde, então pedra perde para papel que perde para tesoura que pede para a pedra.
        //Portanto temos um problema de Ordenação Circular.
        const pedra = 0;
        const papel = 1;
        const tesoura = 2;
        // 0 < 1 < 2 < 0 e se pensarmos que está tudo no módulo 3: 0%3 < 1%3 < 2%3 <3%3
                                                      //resultado:  0     1     2    0

        let jogador1 = pedra;
        let jogador2 = papel;
       
        if (jogador1 === jogador2) {
            console.log('Empatou!');
        } else if(jogador1 === (jogador2 + 1)%3) {
            console.log(jogador1)
            console.log(jogador2 + 1)
            console.log('jogador1 ganhou!');
        } else {
            console.log('jogador2 ganhou!');
        }

        //PS: uma forma de resolver esse problema é realizando algumas condicionais if, esse é um exercício bom para treinar 
              //quando se é iniciante. Do contrário, temos que trazer soluções mais inteligentes.

//ORDENAÇÃO CIRCULAR
        //É um conceito matemático que permite trabalhar com uma sequência finita de elementos, onde o elemento após o último é o primeiro da sequência.
        //Como num relógio que está sempre num loop infinito dentro de um número finito de possibilidade.
        //Para ilustrar melhor, podemos pensar em um círculo, onde os elementos são distribuídos em pontos ao longo do perímetro. Quando atingimos o último ponto, 
        //a próxima posição é novamente o primeiro ponto do círculo, criando um loop infinito.
        //Se você pensar que o Joquempô está dentro desse mesmo conceito. Você tem o número '0'  e logo se somamos '0+1' temos o sucessor de '0' que é igual a '1'. 
        //Se somando '1+1' temos o sucessor de '1' que é '2'. Se somamos '2+1' temos '3' , porém '3' não existe dentro das possibilidades que definimos no jogo. 
        //Portanto, usamos os recursos da Matemática ao nosso favor. Quando temos a condição 'jogador1 === (jogador2 + 1)%3' isso quer dizer que você está ensinando 
        //ao computador por meio da Matemática que quando ele tiver o '2' como opção escolhida pelo jogador2, comparamos se o opção do jogador1 foi '0', caso seja verdadeiro, 
        //o jogador1 ganha. Porque? porque se o jogador1 ganha, 'jogador1 === (jogador2 + 1)%3' equivale dizer ' 0 === (2+1) % 3' que equivale a '0 === 0'. 
        //O %3 (módulo 3) é o número de possibilidades que temos para trabalhar que são 3:  '0,1,2'. Essa expressão garante a ordenação circular do jogo. 
        //Vale ressaltar que esse expressão verifica somente se o jogador1 ganhou e nada mais. Se o jogador1 perdeu, o código entra na condição 'else' e se empatou na primeira condição if.

















         