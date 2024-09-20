import React from 'react'

const Noticias = () => {
  return (
    <div className="container-fluid causes py-5">
  <div className="container py-5">
    <div className="text-center mx-auto pb-5" style={{maxWidth: 800}}>
      <h5 className="text-uppercase text-primary">Noticias Recientes</h5>
      <h1 className="mb-4">The environment needs our protection</h1>
      <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      </p>
    </div>
    <div className="row g-4">
      <div className="col-lg-6 col-xl-3">
        <div className="causes-item">
          <div className="causes-img">
            <img src="salvy.jpg" className="img-fluid w-100" alt="Image" />
            <div className="causes-link pb-2 px-3">
              <small className="text-white"><i className="fas fa-chart-bar text-primary me-2" />Goal: $3600</small>
              <small className="text-white"><i className="fa fa-thumbs-up text-primary me-2" />Raised: $4000</small>
            </div>
            <div className="causes-dination p-2">
              <a className="btn-hover-bg btn btn-primary text-white py-2 px-3" href="#">Ver jugador</a>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
              <span>65%</span>
            </div>
          </div>
          <div className="causes-content p-4">
            <h4 className="mb-3">First environments activity of</h4>
            <p className="mb-4">Help today because tomorrow you may be the one who needs more helping!</p>
            <a className="btn-hover-bg btn btn-primary text-white py-2 px-3" href="#">Leer noticia</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-3">
        <div className="causes-item">
          <div className="causes-img">
            <img src="altuve.jpg" className="img-fluid w-100" alt="Image" />
            <div className="causes-link pb-2 px-3">
              <small className="text-white"><i className="fas fa-chart-bar text-primary me-2" />Goal: $3600</small>
              <small className="text-white"><i className="fa fa-thumbs-up text-primary me-2" />Raised: $4000</small>
            </div>
            <div className="causes-dination p-2">
              <a className="btn-hover-bg btn btn-primary text-white py-2 px-3" href="#">Ver jugador</a>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              <span>75%</span>
            </div>
          </div>
          <div className="causes-content p-4">
            <h4 className="mb-3">Build school for poor children.</h4>
            <p className="mb-4">Help today because tomorrow you may be the one who needs more helping!</p>
            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Leer noticia</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-3">
        <div className="causes-item">
          <div className="causes-img">
            <img src="lopez.jpg" className="img-fluid w-100" alt="Image" />
            <div className="causes-link pb-2 px-3">
              <small className="text-white"><i className="fas fa-chart-bar text-primary me-2" />Goal: $3600</small>
              <small className="text-white"><i className="fa fa-thumbs-up text-primary me-2" />Raised: $4000</small>
            </div>
            <div className="causes-dination p-2">
              <a className="btn-hover-bg btn btn-primary text-white py-2 px-3" href="#">Ver jugador</a>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
              <span>85%</span>
            </div>
          </div>
          <div className="causes-content p-4">
            <h4 className="mb-3">Building clean-water system for rural poor.</h4>
            <p className="mb-4">Help today because tomorrow you may be the one who needs more helping!</p>
            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Leer noticia</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-3">
        <div className="causes-item">
          <div className="causes-img">
            <img  src="santander.jpg" className="santander1 img-fluid w-100" alt="Image" />
            <div className="causes-link pb-2 px-3">
              <small className="text-white"><i className="fas fa-chart-bar text-primary me-2" />Goal: $3600</small>
              <small className="text-white"><i className="fa fa-thumbs-up text-primary me-2" />Raised: $4000</small>
            </div>
            <div className="causes-dination p-2">
              <a className="btn-hover-bg btn btn-primary text-white py-2 px-3" href="#">Ver jugador</a>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
              <span>95%</span>
            </div>
          </div>
          <div className="causes-content p-4">
            <h4 className="mb-3">First environments activity of this summer.</h4>
            <p className="mb-4">Help today because tomorrow you may be the one who needs more helping!</p>
            <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Leer noticia</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Noticias