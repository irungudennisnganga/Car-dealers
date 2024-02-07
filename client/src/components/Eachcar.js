import React from 'react'
import { useNavigate } from 'react-router-dom'

function Eachcar({cars}) {

    const navigate =useNavigate()
 
    function onHandleClick(id) {
         // console.log(id)
         navigate(`/cars/${id}`)
 }

    
  return (
  
    <div>
        <div    className="card">
       <div className="image-wrapper">
     
          <img onClick={ () =>  onHandleClick(cars.id)} src={cars.images} alt='bot' />
     
         </div>
           <div className="text-box-wrapper">
              <div className="text-box">
                <h3 className="heading"> {cars.name}  </h3>
                <p className="text"> {cars.type} </p>
                <p className="text"> {cars.price}  </p>
             
                
             </div>
           </div>
          
           </div>
          
        </div>
        
       
       
  )
}

export default Eachcar