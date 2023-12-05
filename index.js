//Precisa construir uma função que recebe um número e retorna o fatoria
//sem utilizar nemhum laço de repetição
//Primeiro preciso entender a regra do fatorial e depois fazer o programa
//posso fazer com estrutura de repetição primeiro para ver como funciona
//regra: é a multiplicação de todos os numeros que forma o número (menos o 0)
// ex: 4 = 4*3*2*1 = 24

/*let num = 150;
let fat = 1
for (let i = 1; num >= i; i++) {
    fat = i * fat
}
console.log(Math.round(fat)+ "n")*/

let factorial = (num) => {
  const intNum = BigInt(num);
  if (intNum === 0n) {
    return 1n;
  }

  return intNum * factorial(intNum - 1n);
};
console.log(factorial(0));
