//"A Matemática é a busca por aquilo que é verdadeiro a partir de premissas de coisas que estabelecemos ser verdadeiras.
//Isso quer dizer que podemos mudar essas premissas e as coisas que vamos encontrar como verdade serão diferentes.
//Exemplos: Retas paralelas não se cruzam, fruto da teoria da Geometria Euclidiana.
//          Retas paralelas se tocam, fruto da Geometria Projetiva."

//Fundamentos de Matemática Elementar
    //vol1 - Lógica, conjuntos e funções.

//Existe lógica tanto no software quanto no hardware.

//#PROPOSIÇÃO
    //É uma sentença afirmativa que pode possuir apenas o valor binário, ou seja, que só pode ser classificada como true ou false. 
    //Se não podemos dizer 'isso é verdadeiro' ou 'isso é falso', então, não é uma proposição.

//PS: Operações que o hardware faz são aritiméticas, lógicas e de deslocamento de bits.

//#CONECTIVOS LÓGICOS
//Conectivo 'E' - 'AND' - && - ^
let idade = 78
if (idade >= 18 && idade < 70) { //Proposição composta
    "É obrigado a votar!"
}
    //True sempre que os dois lados forem verdadeiros,
    //false, caso contrário.    
    /*78 >= 18 = V
      78 < 70 = F
      
      V && F = F
      F && V = F
      V && V = V
      F && F = F
      
    Outra forma de pensar: quantas possibilidade temos na tabela verdade do 'E'? 2^n = 2^2 = 4 possibilidades.*/

    //Representação da tabela verdade 'E' no nível de máquina (hardware):
    /*0 - false
      1 - true

      0 & 0 = 0
      0 & 1 = 0
      1 & 1 = 1
      0 & 0 = 0 */
    //Como o computador calcularia os bits usando o conectivo 'E':
    /*0000000011010101 & 
      1010101001011000 =
      0000000001010100 */

//Conectivo 'OU' - 'OR' - || - v
if ((idade >= 16 && idade < 18) || idade >= 70) { 
    "Voto é facultativo!"
}
    /*p - proposição
      q - proposição
      p v q */
    //True somente se um lado for verdadeiro,
    //false, caso contrário.  
    /*V || F = v
      F || V = V
      V || V = V
      F || F = F*/
    //Representação da tabela verdade 'OU' no nível de máquina (hardware):
    /*0 - false
      1 - true

      0 & 0 = 0
      0 & 1 = 1
      1 & 1 = 1
      1 & 0 = 1 */

//PS: Computador usam circuitos eletrônicos, e por isso temos que ter alguma forma de diferenciar os estados
      //dentro desses componentes eletrônicos para poder dizer que valor que tem, e isso é feito através dos
      //impulsos elétricos que representamos com '0' e '1'. De forma simplificada, se passa corrente é igual a '1'
      // se não passa corrente é igual a '0'. E no caso da computação quântica temos mais que dois estados.


//#CONECTIVOS CONDICIONAIS
//p -> q (se p então q)
//p <-> q (p somente se q)

/*  p -> q
    V -> F = F
    F -> V = V
    V -> V = V
    F -> F = V*/

//PS1: Do falso podemos derivar qualquer coisa! Se partir de uma premissa falsa podemos dizer que a proposição como um todo é verdade, pois, de um absurdo qualquer coisa é verdade.
       //Por exemplo, se partimos de uma proposição falsa: "Se eu sou uma formiga amanhã vai chover",
       //estaremos partindo de uma coisa absurda e então amanhã pode ser qualquer coisa na verdade.
       //"Se fulano tivesse feito tal coisa teria sido tudo diferente." Sim, seria diferente, mas não podemos afirmar que o que estamos afirmando
       //seria o que teria acontecido, é falso isso.
//PS2:É falso se partimos de uma premissa verdadeira e tentar fazer uma conclusão que é errada. 
        //Se partimos de alguma coisa que é verdade, não podemos concluir algo que é falso.

/*  p <-> q
    V <-> F = F
    F <-> V = F
    V <-> V = V
    F <-> F = V*/

//PS: Só é verdadeiro apenas quando os dois temo mesmo valor.

//#NEGAÇÃO DAS PROPOSIÇÕES
//NEGAÇÃO SIMPLES
!(idade >= 18)

//NEGAÇÃO COMPOSTA DO CONECTIVO 'E'
if (!(idade >= 18 && idade < 70)) {
    "Não é obrigatório votar!"
}
//ou melhor:
if (!(idade >= 18) || !(idade < 70)) {
    "Não é obrigatório votar!"
}

//PS1: Se vamos negar o conectivo 'E' temos que negar cada uma das partes e trocar o conectivo para 'OU'.
      //De outra forma a ~(p ^ q) <-> ~p v ~q (a negação de p 'E' q é equivalente a negar o p 'OU' negar o q).
//PS2: A relação de equivalente lógica é dizer que sempre quando um lado for verdade o outro também é 
       //verdade e da mesma maneira sempre que um lado for falso o outro também é falso.

//#CONTRADIÇÃO DENTRO DA LÓGICA
idade < 18 && idade > 70
//Essa proposição é sempre falsa, pois, como o && depende dos dois lados serem verdadeiros para ser true,
//não é possível uma pessoa ser ao mesmo tempo menor que 18 e maior do que 70.

//NEGAÇÃO COMPOSTA DO CONECTIVO 'OU'
if (!((idade >= 16 && idade < 18) || idade >= 70)) { 
    "Voto não é facultativo!"
}

if (!(idade >= 16 && idade < 18) && !(idade >= 70)) { 
    "Voto não é facultativo!"
}
//PS: Se vamos negar o conectivo 'OU' temos que negar cada uma das partes e trocar o conectivo para '&&'.
      //De outra forma a ~(p || q) <-> ~p && ~q (a negação de p 'OU' q é equivalente a negar o p '&&' negar o q).