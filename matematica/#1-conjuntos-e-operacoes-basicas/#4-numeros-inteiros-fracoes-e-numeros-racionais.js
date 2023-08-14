//REFLEXÃO: Não só a Matemática é cumulativa, o conhecimento em geral é cumulativo, você vai vivendo no mundo
//vai aprendendo, vai construindo sua visão de mundo e você vai interpretando o mundo a partir de tudo que você viveu.
//Porém, para se construir coisas mais avançadas precisamos cosntruir a base, caso contrário o cérebro ignora.
//Quando algo chega que parece muito distante do que você conhece você ignora.

//#EXPANDINDO A NOÇÃO DE NÚMEROS
    //#CONJUNTO DOS NÚMEROS INTEIROS(Z)
    //Vimos o conjunto dos número naturais do '0' para frente indefinidamente. Mas...
    //O QUE ACONTECE ANTES DO '0'?
        //Teremos o lado negativo dos números que também podemos contar infinitamente. E com 
        //isso ganhamos mais possiblidades numéricas ampliando nossa reta, onde tinhamos 
        //números após o zero (conjunto dos números naturais(N)) e agora temos números antes do zero 
        //(conjunto dos números inteiros(z)):
        //Reta: <...-6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 ...>    
        //Como agora inserimos novas informações portanto podemos derivar novas interpretações da verdade
        //que antes estávamos trabalhando.

    //#PROPRIEDADE DA ADIÇÃO E SEU INVERSO ADITIVO (SUBTRAÇÃO)
        //Nas propriedades da adição vimos que ela é:
            //Comutativa
            //Associativa
            //Fechada
            //Elemento nuetro
        //Quando olhamos para os números negativos, podemos definir mais um propriedade para a operação de adição.
        //Podemos dizer que cada um dos números possuem um inverso aditivo, porque a partir do zero se andamos para 
        //a direita da reta temos '1' e se andamos para a esquerda da reta temos '-1' e assim sucesivamente com cada número
        //e seu inverso aditivo. Os mesmo apresentam a mesma distância do '0'. Portanto temos essa reciprocidade onde '1' é o inverso
        //aditivo do '-1' e vice-versa e assim por diante.
        //O QUE DETERMINA QUE UM NÚMERO É O INVERSO ADITIVO DO OUTRO?
            //É quando somando um número com seu inverso aditivo (oposto aditivo) o resultado deve ser o elemento netro: zero.
            //O que isso quer dizer é que:           
                console.log(1 +(-1) === 0);
            //Como a adição é comutativa, então:
                console.log(-1 +(+1) === 0);
            //Os números agora passam a ter sinal para indicar se ele está a direita ou a esquerda do zero.
            //E isso é uma verdade dentro do conjunto Z.
            //Conluimos que a subtração não é bem algo independente, e entendemos que tudo é adição, pois:
                console.log(7 - 2 === 7 +(-2));
                //7 - 2 na verdade é 7 +(-2). Basicamente o que existe é somente a adição, a subtração é uma adição com 
                //o oposto aditivo de qualquer outro número.
            //Observando o diagrama de Vean temos mais repertório onde o conjunto dos números naturais está contido dentro 
            //do conjunto dos números inteiros.
        
    //#FRAÇÕES
        //Origina-se de uma razão, isso é dizer que a razão entre dois números é um divido pelo outro.
        //QUAL A RAZÃO ENTRE 2 e 5?
            //É 2 / 5 (é 2 divido por 5).
        //A fração nos trás o poder de representar coisas que não são inteiras. A ideia geral da fração é conseguir representar pedaços de um todo.
        //Se pensamos em uma pizza e dividirmos ela em 2 pedaços, dizemos 1 sobre 2 (1/2), ou seja, uma pizza dividida em 2 pedaços.
        //Se divirmos essa pizza em 4, dizemos 1 sobre 4, ou seja, representa 1 pizza dividida em 4 pedaços. Então, cada pedaço representa 1/4 da pizza.
        //E quando o denominador é pequeno podemos nos referir a eles assim: 1/2 (um meio), 1/3 (um terço), 1/4 (um quarto), 1/5 (um quinto), 1/6 (um sexto),
        //1/7 (um sétimo), 1/8 (um oitavo), 1/9 (um nono), 1/10 (um décimo). Após isso fica mais difícil rastrear esses nomes, mas ainda podemos chamar 1/11
        //(um sobre 11 avos/ um sobre onze), 1/12 (um sobre 12 avos/ um sobre doze), enfim.

        //#QUAL O NOME DAS PARTES DE UMA FRAÇÃO?
            //1/2, onde 1 é o numerador e 2 o denominador.

        //#QUEM É MAIOR 1/2 OU 1/4?         
            //A ideia de comparar fração ou fazer qualquer operação com fração é conseguir convertê-las em um denominador comum.

        //#COMO TER UM DENOMINADOR COMUM ENTRE AS FRAÇÕES?
            //COMO SOMAR E COMPARAR FRAÇÕES COM DENOMINADORES IGUAIS?
                //Podemos multiplicar tanto o numerador quanto o denominador por um mesmo valor, sem alterar a proporção/razão das frações.
                //Então se multiplicar 1/2 por 2, temos 2/4. Portanto, 1/2 é equivalente a 2/4, ou seja, 1/2 = 2/4.
                //Se de uma pizza que foi dividida em 4 pedaços, cada pedaço representa 1/4 da pizza, queremos representar 2 pedaços dessa
                //pizza teremos uma soma dos pedaços: 1/4 + 1/4 = 2/4. 
                //Quando comparação frações com denominador comum, é fácil somar e também é fácil saber quem é maior: 2/4 > 1/4, pois como 
                //estão na mesma base, olhamos apenas para o numerador e conseguimos somá-los ou definir o maior entre eles sem muitos problemas. 
                //E fica óbvio que quem tem mais fatias da pizza é entre eles o maior.

            //COMO SOMAR E COMPARAR FRAÇÕES COM DENOMINADORES DIFERENTES?
                //Para buscar o mesmo denominador entre frações de denominadores diferentes precisamos ter a mesma quantidade 
                //de pedaços em ambas as frações, por exemplo: 1/2 e 1/3,
                //devemos dividir cada pedaço da pizza de 1/2 em 3 e cada pedaço da pizza de 1/3 em 2, ou seja, estamos manipulando
                //as frações até termos a mesma quantidade de pedaços do todo de cada fração.
                //Então contando todos os pedaços que temos agora, vemos que é a mesma quantidade de pedaços: 6, ou seja, conseguimos compatibilizar as divisões. 
                //em seguida verificamos a quantidade de pedaços que tinhamos dessas pizzas. Se tinhamos 1 pedaço de 2 (1/2), agora temos 3 pedaços 
                //que agora fazem parte de uma divisão para 6 (3/6). Se tinhamos 1 pedaço de 3, agora temos 2 pedaços que agora fazem parte de uma divisão para 6 (2/6). 
                //Concluimos a equivalência de 1/2 = 3/6 e de 1/3 = 2/6.
                console.log(1/2 === 3/6);
                console.log(1/3 === 2/6);
                //E podemos dizer com facilidade que 3/6 > 2/6, porque quem tem mais pedaços é consequentemente maior.
                //Considerando essa conclusão sabemos agora que por consequência 1/2 > 1/3.

                //PS:Entender fração é ter na cabeça a ideia de que uma fracão representa uma quantidade relativa de um todo 
                //e que essa quantidade pode ser expressa de forma númerica por várias números diferentes que são equivalentes entre si, 
                //porque se multiplicamos o numerador e denominador pelo mesmo valor, teremos numericamente exatamente a mesma proporção, 
                //mesmo sendo números diferentes.
                //7/27 é igual propocionalmente que 175/675.

    //CONJUNTO DOS NÚMEROS RACIONAIS(Q)
        //Ao vermos fracão estamos olhando para números que não são inteiros. Portanto nossa reta foi adicionada de mais informações.
        //Portanto começamos a colocar números entre os inteiros, que são os números racionais que surgem da divisão entre dois números inteiros.
        //Reta: <...-6 -5 -4 -3 -2 -1 0 (1/2) (2/3) (1/3) 1 2 3 4 5 6 ...>  
        //Dizer 1/2 é equivalente dividir 1 pelo 2 que pode ser representado por 0.5,
        //porque 1 dividido 2 não dá, então se queremos continuar a divisão adicionamos '0,' e multiplicamos o dividendo por 10,
        //que fica 1*10 = 10, então, 10 dividido 2 = 0,5 e resto '0'.
        //PORQUE MULTIPLICAMOS POR 10?
            //Porque se multiplica pela base númerica que estamos trabalhando, se fosse em binário multiplicariamos por 2 por exemplo.
        //Reta: <...-6 -5 -4 -3 -2 -1 0 0.5 0.6 0.3 1 2 3 4 5 6 ...> 
        //PS: Se queremos dividir um número de uma forma não inteira, sempre vamos terminar com resto '0', pois vamos dividir enquanto pudermos dividir.

        //E QUANDO TEMOS O NUMERADOR MAIOR QUE O DENOMINADOR?
            //3/2 = 1,5 - isso quer dizer que temos 1 parte inteira da pizza + 0.5 a mais da outra pizza.
            //13/8 = 1,625 - isso quer dizer que temos 1 parte inteira da pizza + 0.625 a mais da outra pizza.
    
        //PS: Quando começamos a olhar para essas frações ou divisões caimos entre os números inteiros e com isso vendo que
        //os números racionais são maiores que os números inteiros, porque um número inteiro é racional também, 
        //pois, podemos pensar que 2 inteiro é a mesma coisa que a fração de 2/1.
        

    








    











