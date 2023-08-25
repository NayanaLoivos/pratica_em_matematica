//Já vimos fração e porcentagem e sabemos que são meios de conseguir fazer medidas
//relativas, ou seja, é entender o quanto uma parte representa do todo.
//As médias nos permite ter uma noção relativa para podermos comparar coisas dentro
//de uma base comum de valores.
//Todos esses conceitos de fração, porcentagem e médias são ferramentas importantes dentro
//do campo da estatística, ou seja, quando estamos lidando com conjuntos de dados, e queremos
//entender comportamento de coisas a partir de números.

//O QUE É A MÉDIA ARITMÉTICA?
    //Também chamada de média simples ou apenas média.
    //A ideia de média é construir um único valor no final que venha a partir dos valores que temos.
    //A média aritmética tem um problema que é ao somar todos os valores você pode acabar mudando de escala,
    //pois ao somar todos eles podemos obter valores positivos muito maiores do que tinhamos ou valores negativos
    //muito menores do que tinhamos. Portanto a ideia é que façamos a divisão pelo mesmo números de valores que somamos.
    //E assim conseguimos trazer todos esses valores para um escala bem próxima aos valores que já tinhamos.
    //Por exemplo:
        console.log((12+7+9+13+8)/5) //9.8
        //Repara como a escala do resultado final fica próximo dos números que tinhamos.
        //Seo menor valor é 7 e o maior valor é 13, é natural que essa média esteja entre 7 e 13.

    //PROPRIEDADES DA MÉDIA
        //Podemos entender algumas propriedades da média somente olhando o resultado:
        //O resultado não pode ser maior que o maior número que já tinhamos.
        //O resultado também não pode ser menor que o menor número que já tinhamos.
        //Sempre vão existir números maiores que puxam a média para cima e menores que puxam a média para baixa, 
        //e a média ficará vai estar no meio desses valores.
    
    //PODEMOS REPRESENTAR A MÉDIA COMO NOTAÇÃO DE FRAÇÃO?
        //Sim. 
        console.log((132 +(-22)+76)/3) //62
        //Dividimos o resultado da soma pelo denominador 3.
    
    //CURIOSIDADE 
        //Se pegamos o PIB do nosso Brasil, não podemos ser enganados a olhar somente o total de riquezas que
        //o país produziu dentro do ano, devemos pegar esse PIB e dividir essa riqueza pelo total de brasileiros
        //já que cada brasileiro contribui para esse PIB a partir do seu trabalho. Essa métrica é chamada
        //de PIB per capita e podemos nos dar conta que o cenário que podia ser bom analisando sobre o PIB, 
        //passa a apresentar um cenário não tão bom como podia parecer. É importante conhecer os tipos de comparação 
        //do que estamos falando para obtermos uma base mais adequada.

//O QUE É A MÉDIA PONDERADA?
    //A principal diferença da média aritmética é a diferente importância dado aos valores que
    //estamos trabalhando. Na média simples, todos os valores possuem a mesma relevância, ou seja, 
    //nenhum dos valores possuem uma contribuição maior para a média do que o outro. Já a média ponderada
    //permite estabelecer esse grau de relevância entre os valores. 
    //COMO É DADA ESSA RELEVÂNCIA?
        //É por meio de outros valores que chamamos de pesos. Primeiro multiplicamos todos valores envolvidos
        //antes de somar. Por exemplo, quando queremos avaliar quem vai passar ou não em um vestibular. 
        //Temos um conjunto de notas específicas e precisamos de um único valor para poder ranquear os candidatos
        //e decidir os aprovados ou não. Tipicamente isso seria uma média simples, porém, podemos levar em 
        //consideração por exemplo o tipo do curso que a pessoa está pleiteando. Num curso de Engenharia ou Matemática
        //queremos dar maior relevância (peso) para as matérias de Física, Matemática de toda essa parte que se 
        //convencinou a chamar de exatas, em contra partida num curso de Filosofia ou História de toda essa parte que se 
        //convencinou a chamar de humanas. Portanto com a média ponderada conseguimos atribuir esses pesos relativos.
        //Digamos que estamos num vestibular em que temos Matemática(M) peso 3, física(F) e quimica(Q) peso 2 e português(P) e inglês(I) peso 1.
        //A partir desses pesos podemos calcular a nota final:
        //3xM+2xF+Qx2+1xP+1xI / 3+2+2+1+1 = 3xM+2xF+2xQ+P+I / 9
        //Perceba que ao invés de dividir por 5 matérias, divimos pela soma dos pesos.]
        //Se uma pessoa tirou 4,5 em M, 7 em F, 6,7 em Q, 9,2 em P e 8,5 em I, temos que:
            console.log(((3*4.5 + 2*7.0 + 2*6.7 + 9.2 + 8.5) / (3+2+2+1+1)).toFixed(2))
            //Resultado: 6.51
            //Apesar de essa pessoas ter tirado 9.2 em português e 8.5 em inglês a nota ficou em 6.51.
            //Porém a prova tem um impacto maior na Matemática do que o portugês e o inglês.
        //PS: Os pesos podem levar valores quebrados e não somente inteiro.

        //CURIOSIDADE
            //Para a representação digital o branco, o preto e o cinza são as mesmas cores, apenas diferem no brilho.
            //De forma que o branco é mais brilhoso e o preto é menos brilhoso. Mas se você tirar o brilho de qualquer cor
            //essa cor vai para o preto e se você saturar colocando o brilho máximo ela vai para o branco.
            //Sabendo disso e conhecendo o padrão RGB, se queremos calcular uma imagem em tons de cinza e tivessemos esses
            //valores em RGB, sabemos que o cinza tem todas as três coordenadas iguais. A primeira coisa que poderia vir na
            //sua mente é fazer uma média entre esses valores, porque?
                //Sabemos que o cinza é representado por um valor igual nas três coordenadas e precisamos de um único valor para as três coordenadas 
                //e por agora temos três valores diferentes entre si. Então, qual o recurso matemático que sabemos até agora que nos permite transformar 
                //uma certa quantidade de valores em um só? É a média simples. Portanto, se tenho um RGB 20, 100, 28
                console.log((120+100+228)/3);
                //PORÉM, QUAL O PROBLEMA DE SOMAR TODOS OS VALORES NESSE CASO?
                    //Porque se somando todos os valores, teremos 448 e quando fazemos isso
                    //tiramos esses números da escala de 255 máximo permitida para eles no momento que somamos.
                    //Mas se dividimos pelo números de valores somados, teremos 149 e encontramos um 
                    //valor que cai dentro da escala válida entre 0 e 255. Então com a média eu consigo compor um único
                    //valor que está dentro da escala de referência que precisamos e com isso, teremos um tom de cinza.
                    //Porém, o cérebro humano não dá o mesmo peso para o vermelho, o verde e o azul, pois, sabemos que
                    //damos mais relevância para os tons de verde. E quem contribui menos para a luminosidade da cor é o azul.
                    //Por conta disso, a forma que calculamos não é a forma mais correta. O que precisamos fazer é uma média
                    //ponderada que leve em consideração a forma como nosso cérebro funciona na percepção das cores.
                





