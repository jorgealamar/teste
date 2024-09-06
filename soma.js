// Função para contar a ocorrência de uma letra específica em uma palavra ou frase
function contarLetra(frase, letra) {
  // Certifica-se de que a letra e a frase são strings
  if (typeof frase !== 'string' || typeof letra !== 'string') {
      throw new Error('Frase e letra devem ser strings.');
  }
  
  // Converte a letra para minúsculas para garantir que a contagem seja case-insensitive
  letra = letra.toLowerCase();
  
  // Converte a frase para minúsculas para garantir que a contagem seja case-insensitive
  frase = frase.toLowerCase();
  
  // Conta o número de ocorrências da letra
  let contagem = 0;
  for (let i = 0; i < frase.length; i++) {
      if (frase[i] === letra) {
          contagem++;
      }
  }
  
  return contagem;
}

// Exemplo de uso da função
const frase = "A palavra 'AMOR', é linda de mais";
const letra = "a";

const resultado = contarLetra(frase, letra);
console.log(`A letra "${letra}" aparece ${resultado} vezes na frase "${frase}".`);
