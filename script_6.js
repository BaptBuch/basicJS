code_1= "CCGUCGUUGCGCUACAGC"
code_2= "CCUCGCCGGUACUUCUCG"
i = 0
prot = ""

function traduction(proteine)
{
for (let i = 0; i < proteine.length; i=i+3) {
  aa = proteine.substr(i,3);
  
  if (aa == "UCU" || aa == "UCC" || aa == "UCA" || aa == "UCG" || aa == "AGU" || aa == "AGC"){
    aa = "Sérine";
    prot = prot +aa+ "-";}
  else if (aa == "CCU" || aa == "CCC" || aa == "CCA" || aa == "CCG"){
    aa = "Proline"
    prot = prot + aa+ "-"}
  else if (aa == "UUA" || aa == "UUG"){
    aa = "Leucine"
    prot = prot +aa+ "-"}
  else if (aa == "UUU" || aa == "UUC"){
    aa = "Phénylalanine"
    prot = prot + aa+ "-"}
  else if (aa == "CGU" || aa == "CGC" || aa == "CGA" || aa == "CGG" || aa == "AGA" || aa == "AGG"){
    aa = "Arginine"
    prot = prot + aa+ "-"}
  else if (aa == "UAU" || aa == "UAC"){
    aa = "Tyrosine"
    prot = prot + aa+ "-"} 
}
return(prot.slice(0, -1)) //Cette fonction sert à enlever le dernier tiret
}

choix = prompt("Veux-tu traduire la protéine 1 ou 2 ?")

switch (choix) {
  case "1":
    console.log(`La traduction en protéines de l'ARN CCG-UCG-UUG-CGC-UAC-AGC est ${traduction(code_1)}`)
    break;
  case "2":
    console.log(`La traduction en protéines de l'ARN CCG-UCG-UUG-CGC-UAC-AGC est ${traduction(code_2)}`)
    break;
  default:
    break;
}
