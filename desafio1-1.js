// Cálculo do IMC
const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura)

if (imc >= 30){
  var message = (`${nome} você está acima do peso`)
}
else{
  var message = (`${nome} você não está acima do peso`)
}

console.log(message)

// Cálculo da aposentadoria

const nome2 = "Kaique";
const sexo = "M";
const idade = 48;
const contribuicao = 40;

const calculoContribuicao = idade + contribuicao

// essas variaveis vao retornar TRUE or FALSE
const homemPodeAposentar = sexo == "M" && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == "F" && contribuicao >= 30 && calculoContribuicao >= 85

if (homemPodeAposentar || mulherPodeAposentar){
  var message2 = `${nome2}, você pode se aposentar!`
} else{
  var message2 = `${nome2}, você NÃO pode se aposentar!`
}
console.log(message2);

//=================================================================================

