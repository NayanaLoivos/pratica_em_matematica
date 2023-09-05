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
                //PORÉM, QUAL O PROBLEMA DE APENAS SOMAR TODOS OS VALORES NESSE CASO?
                    //Se somamos todos os valores acharemos um total de 448 e quando fazemos isso
                    //não temos uma intensidade válida para cor, pois a escala é de 255 como máximo.
                    //Portanto, no momento que apenas somamos, tiramos os valores da escala máxima permitida.
                    //Porém, se os dividimos pelo números de valores somados, acharemos 149 e encontramos um 
                    //valor que cai dentro da escala válida entre 0 e 255. Então com a média eu consigo compor um único
                    //valor que está dentro da escala de referência que precisamos e com isso, teremos um tom de cinza.
                    //Porém, o cérebro humano não dá o mesmo peso para o vermelho, o verde e o azul, pois, sabemos que
                    //damos mais relevância para os tons de verde. E quem contribui menos para a luminosidade da cor é o azul.
                    //Por conta disso, a forma que calculamos não é a forma mais correta. O que precisamos fazer é uma média
                    //ponderada que leve em consideração a forma como nosso cérebro funciona sobre a percepção das cores.
            //arquivo HTML para comparar das cores.

//O QUE É A MÉDIA MÓVEL (OU ARITMÉTICA MÓVEL)?
    //Ela pode ser tanto simples como ponderada. Nesse caso, se nada for especificado, presumimos que estamos falando da
    //média simples. Mas qual a caraterística dessa média que a torna móvel? Quando temos muitos valores, é possível que 
    //possamos entender esses dados ao longo de intervalos de tempo ou de espaço, dependendo do que estamos falando. Se estamos
    //falando de COVID, teremos um média móvel no tempo, pois, queremos avaliar como está variando os óbitos e as infecção nos últimos
    //7 dias, por exemplo. O intuito é entender os acontecimentos atuais e compará-los com um período no passado. Fato que se somassemos
    //todos os valores que temos e divirmos, não será possível obter uma compreensão como essa. E se você olhar os dados de um só dia, 
    //também não conseguimos medir se está melhorando ou piorando os quadros de COVID. Portanto, o ideal é agregar algum periodo porque 
    //só assim teremos uma avaliação mais significativa, pois, num dia e outro podemos ter valores mais altos ou mais baixos destonando 
    //facilmente um valor do outro. Por isso que dentro de uma variação específica conseguimos entender melhor o que certos dados significam,
    //desde que usemos as comparações sempre dentro dessa mesma variação.
    //Concluindo, a média móvel é móvel porque ela percorre ao longo do tempo ganhando um valor que está a frente e perdendo o valor que está mais atrás.
    //Então, ela vai se movendo no tempo. Por exemplo, se quero a variação de 7 dias, conforme os dias passam, no oitavo dia, adiciono o oitavo dia no cálculo
    //e removo o primeiro dia, no nono dia, adiciono o nono dia no cálculo e removo o segundo dia e assim sucessivamente.
    //E agora como ela pode ser móvel no espaço? Podemos ver em aplicações que trabalham com dados geolocalizados. Se temos imagens de satélites, por exemplo,
    //pode fazer sentido querer entender uma média dentro de uma determinada região no espaço como um determinado calculo de temperatura em relação a
    //uma outra média de temperatura só que num outro grau de latitude ou longitude. É o tipo de coisa que acontece com processamento de imagem que chamamos de 
    //filtro convolucional.
    











