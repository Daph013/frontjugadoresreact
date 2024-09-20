import React from 'react'
import { useEffect, useState } from "react";
import Cardprod from "../components/Cardprod";
const API='http://localhost:3000/api/pitcher';

const Pitchers = () => {
  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data)
        setDatos(data);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);
  return (
    <>
    <div className="container py-5">
    <h3 className="text-center py-4">Pitchers {datos.lenght}</h3>
    <hr />
    <div className="row g-4">
            {datos && datos.map((item)=>(
               
               
               <div className="col-lg-6 col-xl-3">
                 <div className="causes-item">
                   <div className="causes-img">
                     <img src={item.foto} className="img-fluid w-100" alt="Image" />
                     <div className="causes-link pb-2 px-3">
                       <small className="text-white"><i className="fas fa-chart-bar text-primary me-2" />Goal: $3600</small>
                       <small className="text-white"><i className="fa fa-thumbs-up text-primary me-2" />Raised: $4000</small>
                     </div>
                     <div className="causes-dination p-2">
                       <a className="btn-hover-bg btn btn-primary text-white py-2 px-3" href="#">Ver estadisticas del jugador</a>
                     </div>
                   </div>
                  <div className="causes-content p-4">
                     <h4 className="mb-3">{item.nombre}</h4>
                     <p className="mb-4"> {item.equipo_actual}</p>
                     <p className="mb-4">Lugar de nacimiento:  {item.lugar_nacimiento}</p>
                     <hr />
                     
                   </div>
                 </div>
               </div>


            ))}
            </div>
            </div>
             
         
       Help
       
   
    

</>
  )
}

export default Pitchers