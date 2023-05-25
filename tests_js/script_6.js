trad = [
    {ARN:'UCU',proteine:'Sérine'},
    {ARN:'UCC',proteine:'Sérine'},
    {ARN:'UCA',proteine:'Sérine'},
    {ARN:'UCG',proteine:'Sérine'},
    {ARN:'AGU',proteine:'Sérine'},
    {ARN:'AGC',proteine:'Sérine'},
    {ARN:'CCU',proteine:'Proline'},
    {ARN:'CCC',proteine:'Proline'},
    {ARN:'CCA',proteine:'Proline'},
    {ARN:'CCG',proteine:'Proline'},
    {ARN:'UUA',proteine:'Leucine'},
    {ARN:'UUG',proteine:'Leucine'},
    {ARN:'UUU',proteine:'Phénylalanine'},
    {ARN:'UUC',proteine:'Phénylalanine'},
    {ARN:'CGU',proteine:'Arginine'},
    {ARN:'CGC',proteine:'Arginine'},
    {ARN:'CGG',proteine:'Arginine'},
    {ARN:'AGA',proteine:'Arginine'},
    {ARN:'AGG',proteine:'Arginine'},
    {ARN:'UAU',proteine:'Tyrosine'},
    {ARN:'UAC',proteine:'Tyrosine'}
  ];
  
  let your_ARN = "";
  while(your_ARN == "") {
    your_ARN = prompt("Quelle suite d'ARN veux-tu tester ?");
    your_ARN.toUpperCase;
    if (your_ARN.length%3 !== 0) {
      console.log('Cette séquence est valide car ce n\'est pas un multiple de 3.');
      your_ARN = "";
    }
  } 
  
  let array_ARN = [];
  for(let count = 0; count <= your_ARN.length - 1 ; count++){
    array_ARN.push(your_ARN[0+count]+your_ARN[1+count]+your_ARN[2+count])
    count += 2
  }
  
  let trad_array = []
  
  array_ARN.forEach(ARN => {
    trad.forEach(traduction => {
      if (ARN === traduction.ARN) {
        trad_array.push(traduction.proteine)
      }
    })
  });
  console.log(`Cette séquence d'ARN correspondà la proteine suivante : ${trad_array.join("-")}`)
  