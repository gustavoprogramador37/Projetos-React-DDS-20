import {useState} from "react"

const Varia = () => {
    // Variável padrão
    let itgo = "Shazam"
    let numero = 11


    //Variável com hook useState
    const[number, setNumber] = useState(9)
    const[heroi, setHeroi] = useState("Homem Aranha")
    //Variável vazia
    // const[number, setNumber] = useState("")
  return (
    <div>
      {/* USO DE VARIÁVEIS PADRÃO */}
      <p>A palavra sorteada foi: {itgo}</p>
           
      <h1>{numero}</h1>
      <button onClick={() => {
        numero++ 
        console.log(numero);
        
      }}>
      Aumentar contagem
      </button>
       
       {/* USO DE VARIÁVEIS A PARTIR DE AGORA */}
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 2)   
        }}>
        Aumentar contagem
        </button>


        <button onClick={() => {
          setNumber(9)   
        }}>
        Resetar contagem
        </button>

    
          <button onClick={() => {
          setNumber(number - 2)   
        }}>
        Diminuir contagem
        </button>

       <br />

       <h1>{heroi}</h1>
       <button onClick={() => {
        setHeroi("Peter Parker")
       }}> 
        Mostrar
       </button>



    </div>
  )
}

export default Varia