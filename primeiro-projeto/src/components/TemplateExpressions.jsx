import React from 'react'

const TemplateExpressions = () => {
  // Aqui vai códigos javacript
  let nome = "Ronaldo"

  let jogador = {
    nome:"Aspas",
    time:"Mibr",
    jogo:"Valorant",
    nivel:"Muito bom"
  }

  return (
 // Aqui vai o seu html
    <div>
        <h2>Olá, meu nome é {nome} </h2>
        <p>Seu nome é {jogador.nome}, seu time é {jogador.time}, 
           joga {jogador.jogo} e ele é {jogador.nivel} </p>
    </div>
  )
}

export default TemplateExpressions