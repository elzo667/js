// Exercice 2.4.2. Acné-Bot

console.log(`-- Début de la conversation --`) 

let answer = "";
while(answer !== 'exit') {
  answer = prompt('ya quoi ? - pour quitter : "exit"');

  if (answer === 'exit') {
    console.log('Bye !')
    break
  } else if (answer === '') {
    console.log('Travailles - tu ?')
  } else if (answer.indexOf('?') !== -1) {
    console.log('Ouais Ouais...')
  } else if (answer.toLowerCase().indexOf('fortnite') !== -1) {
    console.log('On s\' fait une partie soum-soum ?')
  } else if (answer === answer.toUpperCase()) {
    console.log('Pwa, calme-toi...')
  } else {
    console.log('Balek')
  }

} 
    
console.log(`-- Fin de la conversation --`) 

