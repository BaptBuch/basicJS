function factorielle(nbr) 
{
  // La factorielle est toujours égale à 1
  if (nbr === 0)
  {
     return 1;
  }
  return nbr * factorielle(nbr-1);
}

nombre = prompt("De quel nombre veux tu connaitre la factorielle ?")
console.log(factorielle(nombre));