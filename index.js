let nave = prompt("Digite o nome da nave")

let escolhaSubstituição = prompt("Qual caracter você deseja substituir?")

let substituição = prompt("Por qual caracter você deseja substituir?")

let novaNave = ""

for(let pos = 0; pos < nave.length; pos++) {
  if(nave[pos] == escolhaSubstituição) {
    novaNave += substituição
  } else {
    novaNave += nave[pos]
  }
}

alert("O novo nome da nave é " + novaNave)


// Explicação:

// Elemental
// e
// h

// pos = 0  E  e  novaNave = E
// pos = 1  l  e  novaNave = El
// pos = 2  e  e  novaNave = Elh

// ...

// pos = 8  l  e  novaNave = Elhmhntal