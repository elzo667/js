
let nb = 0;
while(nb == 0) {
  nb = prompt(`Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?`);
} 

nb = parseInt(nb);
let a = "";
let b = "";

console.log(`Voici la pyramide :`);

for(let i = 1; i <=nb; i++){
  a = ""
  b = ""

  for (let j = 0; j <=(nb-i); j++){
    a +="  ";
  }
  for (let k = 0; k <=i-1; k++){
    b += "$";
  }
  console.log(`${a}${b}`);
}
    

