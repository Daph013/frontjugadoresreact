import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-fondo-header lead"data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand circle" href="/inicio"><img className='rounded' src="/logomlb.jpg" width={100}  alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/inicio">Inicio</a>
        </li>
        <li className="nav-item">
          <Link to={"/pitchers"} className="nav-link" href="#">Pitchers</Link>
        </li>
        <li className="nav-item">
          <Link to={"/posicion"} className="nav-link" href="#">Jugadores de posicion</Link>
        </li>
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Header