// Construçãoe impressão de objetos
const empresa = {
  nome:'Rocketseat',
  cor: 'Roxo',
  foco:'Programação',
  endereço:{
   rua: 'Rua Guilherme Gembala',
   numero: 260
  }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`)

// Vetores e objetos (array)

const programador = {
  nome1: 'Carlos',
  idade: 32,
  propriedade:[
    { tecnologia: "C++", especialidade: "Desktop" },
    { tecnologia: "JavaScript", especialidade: "Web/Mobile" }
  ]
}

console.log(`O usuário ${programador.nome1} tem ${programador.idade} e usa a tecnologia ${programador.propriedade[1].tecnologia} com especialidade em ${programador.propriedade[0].especialidade}`)
