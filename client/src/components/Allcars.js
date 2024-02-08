import React, { useEffect, useState } from 'react'
import Eachcar from './Eachcar'
import Footer from './Footer'
function Allcars() {
    const [cars, setcars]=useState([])
    
    useEffect(() =>{
        fetch("/cars")
        .then(r =>r.json())
        .then(data =>setcars(data))
    },[])

   
    
  return (
    <div>
          
        {
            cars.map(car => {
               return <Eachcar cars={car} key={car.id}  />
            })
        }
        <Footer/>
    </div>


  )
}

export default Allcars