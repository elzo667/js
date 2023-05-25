
let nb = 0;
while(nb == 0) {
  nb = prompt(`De quel nombre veux-tu calculer la factorielle ?`);
} 

nb = parseInt(nb)

for(let count = 0; count <=nb; count++){
  nb += nb * count ;
  console.log(nb)
}
    
console.log(`Le résultat est : ${nb}`)