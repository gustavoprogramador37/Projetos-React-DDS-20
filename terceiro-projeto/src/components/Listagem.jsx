import {useState} from "react"

const Listagem = () => {
   const [lista, setLista] = useState(["Pedro", "Cris", "Manoel", "Altair", "Moacyr"])
   
   const [Jogadores] = useState([
    {id:1,nome:"Kaká", time:"Milan", number: 22},
    {id:2,nome:"Bruno Henrique", time:"Wolfsburg", number: 23},
    {id:3,nome:"Di Stefano", time:"Real Madrid", number: 10},
    ])
    
    //O jogador "BARABARA" jogou no time "BEREBERE" com a camisa "TCHU"


    const [numero, setNumero] = useState(1)

  return (
    <div>
       <button onClick={() => {
        setNumero(numero + 1)
        console.log([...lista])
        setLista([...lista,numero])
       }}>
         Adicionar na lista   
        </button>


       <h2>Listagem</h2>
        <ul>
          <li>João Lucas</li>
          <li>Marcelo</li>  
        { lista.map((valor, index) => (<li key={index}> {valor}</li>))}

    
        </ul>
        
        <h2>Lista de Joadores</h2>
        {Jogadores.map((jogador) => (
        <h3 key={jogador.id}>
            O jogador {jogador.nome} jogou no time {jogador.time} com a camisa {jogador.number}
       </h3>
        ))}

        
        </div>
  )
}

export default Listagem