import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Eachcar.css'

function Eachcar({cars}) {

    const navigate =useNavigate()
 
    function onHandleClick(id) {
         // console.log(id)
         navigate(`/cars/${id}`)
 }

    
  return (

        <div className="cards">
       <div className="image-wrapper">
          <img className='car' onClick={ () =>  onHandleClick(cars.id)} src={cars.images} alt='bot' />
         </div>
           <div className="text-box-wrapper">
              <div className="text-box">
                <h3 className="heading"><b>Name </b> :{cars.name}  </h3>
                <p className="text"><b>Type </b>: {cars.type} </p>
                <p className="text"><b>Price</b> : ksh {cars.price}  </p> 
             </div>
           </div>
          
           </div> 
  )
}

export default Eachcar