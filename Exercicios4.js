let numeros = [];
let num = 0;
let contador = 0;

for (let i = 0; i < 15; i++) {
    num.push(parseInt(prompt(`Escreva aqui ${i}`)));

}

num = parseInt(prompt("entre com o numero"));

for (i = 0; i < 15; i++) {
   if (numeros[i] == num) {
    contador++;
   }
}

console.log(`O numero ${num} aparece ${contador} vezes no array.`);