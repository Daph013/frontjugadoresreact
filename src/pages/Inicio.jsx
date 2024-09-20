import React from 'react'
import Hero from '../components/Hero'
import Carrusel from '../components/Carrusel'
import Noticias from '../components/Noticias'

const Inicio = () => {
  return (
  <>
<Carrusel/>
<h1 className='py-5 text-center'>Bienvenido a MLB Venezuela

</h1>
<Hero/>
 

<Noticias/>
    
    </>
  )
}

export default Inicio