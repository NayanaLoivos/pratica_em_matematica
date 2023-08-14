//Lição: 'Todos somos iguais, o que temos de diferente são as oportunidades. Alguns tem a oportunidade de 
          //aprender antes que outros, mas todos conseguimos aprender se estamos convencidos que podemos!'.

//BASE NUMÉRICA
    //tem haver com a quantidade de símbolos que temos para representar os números que estamos trabalhando.

    //#BASE DECIMAL
        //Temos 10 símbolos: 0,1,2,3,4,5,6,7,8,9
        //O que fazemos quando terminam os símbolos?
            //Começamos a combiná-los: 10, 11, 12, 13, 14, 15, 16 ... 
            //PS: Não combinamos 01 porque não faz diferença, salvo se fosse 0.1.
    
    //Existem outras formas de representar a mesma quantidade de valor? Sim! 
        //Por meio de outras Bases númericas que possuem uma quantidade de símbolos diferentes.
    
    //#BASE BINÁRIA
        //Temos 2 símbolos: 0,1
        //A ideia do computador somente de entender 0 e 1 é que precisamos conseguir representar informações
        //nesses dispositivos que são eletrônicos. De forma geral, a maneira que as informações foram definidas univesamente 
        //dentro dos componentes é verificando se passa corrente elétrica ou se não passa, onde '0' é quando
        //a corrente não passa e '1' quando a corrente passa. Com isso conseguimos diferenciar valores dentro
        //do componente eletrônico. Daí vamos juntando diversos componentes e conseguimos representar uma 
        //sequência de '0's e '1's e com essa sequência podemos obter e manipular informações.
        //Por conta disso, foi criada a relação da base binária com os bits.

        //Qual a relação da base binária com bits?
            //BIT - Binary digIT
                //A palavra dígito, a princípio não faria sentido para falar de coisas que estão na base 2 porque 'dígito' tem haver com 10,
                //Chamamos de dígito porque o 'd' vem do decimal, porém, fazemos essa analogia para compreender melhor as coisas.
                //Portanto, se formou o conceito de dígito binário já que é uma posição dentro de um número binário e dai abreviamos
                //para bit.
            //1 unidade de bit é a representação dos valores '0' ou '1'.
            //O que fazemos quando terminam os símbolos?
            //Começamos a combiná-los: 10, 11, 100, 101, 110, 111, 1000, 1001, 1010...

                //Brincandeira com binário: 'Existem 10 tipos de pessoas no mundo: as que sabem binário e as que não'.
            
            //BYTE
                //Dentro da computação é a referência de um conjunto de 8 bits.
                //Em unidade de bits rapidamente temos o crescimento da quantidade de bits que precisamos para representar um número, 
                //e por conta disso começamos a dar nomes a quantidades agregadas de bits como: megaBits, gigaBits, etc...
                //Byte é de fato a menor unidade que um computador pode representar. Sabendo disso, percebemos que 
                //para repesentar o '0' em decimal o computador precisa alocar 8 bits para representá-lo: '00000000', bem como para 
                //a representação dos outros números como: '1' - '00000001', '2' - '00000010', '3'- '00000011'...
                //Vamos ver onde o binário atua por trás do computador:
                    //IP4
                        //O endereço numérico (IP4) do Google por exemplo é: 142.250.78.206, temos 4 partes marcadas por intervalos, isso quer dizer
                        //que temos 4 bytes que é equivalente a 32 bits. Portanto, com 32 bits representamos um endereço IP4 na internet.
                            //IP4:                              142.250.78.206
                            //4 bytes = 32 bits(2^8):           00000000. 00000000. 00000000. 00000000
                            //com 8 posições representamos números de 0 a 255 (256 valores) que é = 2^8, porque cada um deles é conjunto de 1 Byte ou 8 bits
                            //Então para cada bit em sua posição multiplicamos por 2 da direita para a esquerda, ou seja, conseguimos representar o dobro de números a cada bit: 256, 128, 64, 32, 16, 8, 4, 2
                            //PS: Se dividir o endereço do Google por 2 e juntar o último consciente mais os restos do último ao primeiro resto, obteremos o binário do seu IP4.

                    //Cores RGB
                        //As cores também são representadas por conjuntos de bits. 
                        //Temos alguns sistemas de representação de cor e um deles é o RGB onde temos um quantidade de vermelho, verde e azul.
                        //Então teremos representação de 8 posições onde podemos representar números de 0 - 255 para cada uma das partes, 
                        //e opcionalmente temos o canal alfa (RGBA) que é uma transparência que também varia de 0 - 255.

    //#HEXADECIMAL
        //Temos 16 símbolos: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
        //O que fazemos quando terminam os símbolos?
            //Começamos a combiná-los: 10, 11, 12, 13, 14, 15, 16,..., 1A, 1B, 1C, 1D,...
        //Na computação essa base é interessante porque como trabalhamos com conjunto de bytes,
        //se quebramos o byte no meio, ou seja, olhar para agregados de 4 bits, conseguimos representar
        //esses 4 bits com um único símbolo do hexadecimal. Por exemplo:
            //Binário:      0001 1111
            //Hexadecimal:   1    F 
            //Decimal:       

    //#CONVERSÃO DE BASE NUMÉRICA
    //Como lemos corretamente um número decimal?
    //Leitura correta de um decimal, por exemplo: 12854, lemos, 10000 + 2000 + 800 + 50 + 4
    //casas decimais:                                           dezena de milhar + unidade de milhar + centena + dezena + unidade    
    //Isso quer dizer que que temos:                            1*10000 + 2*1000 + 8*100 + 5*10 + 4*1
    //Repara que estamos pegamos o algoristmo na posição e estamos multiplicando por uma quantidade a mais de 10, então, 1*10^4 + 2*10^3 + 8*10^2 + 5*10^1 + 4*10^0. 
    //E ai vamos somando isso até chegar nos '12854' que temos no exemplo.   
    //Portanto, esse é o princípio que vamos aplicar: 
    const numeroDecimal = 12854;
    const numeroX10Elevado = 10000 + 2000 + 800 + 50 + 4;
    //Se comparamos obteremos true como resposta:
    //console.log(numeroDecimal == numeroX10Elevado);
    
    //#CONVERTER OUTRAS BASES PARA O DECIMAL
        //E como se comporta a leitura em outras bases númericas para converter a número de base decimal?
            //#BINÁRIO
                //A ideia é parecida, será a base elevado a posição do algoritmo também da esquerda para a direita, começando com exponente '0'.
                //numeroBinario = 00011110;
                //numeroX2Elevado = 1*2^4 + 1*2^3 + 1*2^2 + 1*2^1 + 0*2^0;
                //                   1    +   0   +   4   +   8   +  16
                //é igual ao número                29 em decimal
                //Portanto: 11110 == 29
        
            //#HEXADECIMAL
                //numeroHexadecimal = 2B
                //numeroX16Elevado =  2*16^1 + 11*16^0
                //                      32   +   11
                //é igual ao número    43 em decimal
            
            //PS: Se buscamos a tabela ASCII podemos conferir todas essas conversões de base e os chars que serão impressos desses valores. É uma tabela que possui 1 byte.

    //#CONVERTER DECIMAL PARA OUTRAS BASES
        //#PARA BINÁRIO
            //Devemos dividir o decimal por 2 até que o dividendo não seja mais divisível por 2. Por exemplo o número 38:
            //38/2 = 19, resta 0
            //19/2 = 9 , resta 1
            //9/2 = 4  , resta 1
            //4/2 = 2 , resta 0
            //2/2 = 1 , resta 0
            //O número binário é lido a partir do último consciente + os restos últimos ao primeiro. 
            //Portanto para esse exemplo o binário correspondente ao decimal 38 é: 100110.
        
        //PARA HEXADECIMAL
            //38/16 = 2, resta 6
            //O número hexadecimal é lido a partir do último consciente + os restos últimos ao primeiro. 
            //Portanto para esse exemplo o hexadecimal correspondente ao decimal 38 é: 26.

        //#APLICAÇÃO
            //#QUALQUER BASE PARA O DECIMAL
            //1. Aplicação função JS 
            function conversaoParaDecimal(numeroString, base) {            
                return parseInt(numeroString, base);
            }
            //console.log(conversaoParaDecimal('2B', 16));      
            
            //2.Aplicação hard
            function conversorHexadecimal(numeroString) {
                console.log("Entroi no conversor Hexadecimal: ",numeroString)
                const hexadecimal = new Map()
                hexadecimal.set("A",10)
                hexadecimal.set("B",11)
                hexadecimal.set("C",12)
                hexadecimal.set("D",13)
                hexadecimal.set("E",14)
                hexadecimal.set("F",15)
                
                if(hexadecimal.has(numeroString)){
                    return hexadecimal.get(numeroString);
                }
            }
            
            function conversao(numero, base) {            
                const numeroString =  String(numero);                
                let numeroDecimal = 0;
                let expoente = 0;
                for(i = numeroString.length-1; i >= 0 ; i--) {
                    let numeroAtual = numeroString[i];
                    console.log("Numero atual: ",numeroAtual);
                    if(isNaN(numeroAtual)) {
                        numeroAtual = conversorHexadecimal(numeroAtual);
                        console.log("Depois do conversor hexadecimal: ",numeroAtual)
                    }
                    const resultadoPosicao = numeroAtual * (base ** expoente);
                    numeroDecimal += resultadoPosicao;
                    expoente += 1;
                }
                return numeroDecimal;  
            }
            console.log(conversao("2B", 16));

            //#DECIMAL PARA QUALQUER BASE  -- arrumar
            function decimalAOutraBase (n, base) {
                let quociente = n;
                let numero = "";
                while (quociente >= base) {
                    console.log(base)
                    console.log(quociente)
                    let resto = quociente % base;
                    numero += resto;
                    quociente = quociente / base;
                }
                return numero += quociente; //é preciso fazer uma condição para reverter a hexadecimal

            }

            //console.log(decimalAOutraBase(46, 2));

            //COLORS RGB
                //no arquivo '#2-conversao-de-bases-numericas.html'.


