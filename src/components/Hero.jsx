import React from 'react'

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="/hero.jpg" className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-3 mb-3">Major League Baseball <span className='text-warning'>Ven</span><span className='text-primary'>ezu</span><span className='text-danger'>ela</span></h1>
      <p className="lead">Nos llena de orgullo celebrar el talento y la pasión de nuestros peloteros que brillan en las Grandes Ligas.<br/> Desde los legendarios lanzadores hasta los nuevos talentos que emergen cada temporada, cada uno de ellos lleva consigo el espíritu y la esencia de Venezuela, representando a nuestra tierra en el escenario más grande del béisbol.
Aquí encontrarás noticias, estadísticas, y todo lo relacionado con nuestros héroes en el diamante.<br/> Desde impresionantes ponches hasta momentos inolvidables, cada juego es una oportunidad para mostrar al mundo lo que significa ser un venezolano en la MLB.
Únete a nosotros para seguir de cerca a nuestros jugadores, compartir su trayectoria y celebrar sus logros.<br/> ¡Vamos, Venezuela! ¡A apoyar a nuestros pitchers y a todos los que llevan el tricolor en el corazón!</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
      </div>
    </div>
  </div>
</div>


  )
}

export default Hero