import React from 'react'

import ImgFoguete from "../assets/Foguete.jpg"

const MostrarImagens = () => { 
    return (
    <div>

     {/* imagens via link externo     */}
     <h3>Goku SSJ1</h3>
     <img src="https://pm1.aminoapps.com/6791/4830395dda8aeccfc11af597f24f221418febb91v2_hq.jpg" 
     alt="" 
     width={900} 
     height={500} />
     {/* imagens via link assets     */}

     <h3>Foguete</h3>
     <img src={ImgFoguete} 
     alt=""
     width={900} 
     height={500} />
     {/* imagens via link pública     */}
     
     <h3>Marte</h3>
     <img src="../marte-imagem.jpg" 
     alt="" 
     width={900} 
     height={500}
     />
    </div>
  )
}

export default MostrarImagens