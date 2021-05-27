a = prompt("Combien d'étages veux-tu à ta pyramide ?")
i = 0


while (0 <= a){
  i ++;
  a = a -1;
  b = " ".repeat(a);
  c = "#".repeat(i);
  console.log (`${b}${c}`);
  if (a == 0) break;
}