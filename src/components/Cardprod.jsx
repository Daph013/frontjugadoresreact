import React from 'react'

const Cardprod = ({item}) => {
  return (
    <>
        <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                <div className="card-header p-0">
                <h5>{item.nombre}</h5>
                </div>
                <div className="card-body text-center">
                    <h5>{item.nombre}</h5>
                    <p className="text-success">Equipo Actual en MLB: {item.equipo_actual}</p>
                    <h5 className="text-danger">Lugar de nacimiento: {item.lugar_nacimiento}</h5>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-outline-danger btn-sm mx-1" data-bs-toggle="modal" data-bs-target={`#${item.id}`} >Detalle</button>
                </div>
            </div>
        </div>
       
    </>  
  )
}

export default Cardprod