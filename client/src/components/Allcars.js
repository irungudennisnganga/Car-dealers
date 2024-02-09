import React, { useEffect, useState } from 'react'
import Eachcar from './Eachcar'
import Footer from './Footer'
import './Allcars.css'
function Allcars() {
    const [cars, setcars]=useState([])
    
    useEffect(() =>{
        fetch("/cars")
        .then(r =>r.json())
        .then(data =>setcars(data))
    },[])

   
    
  return (
    <>
        <div className='all-cars'>
          
          {
              cars.map(car => {
                 return <Eachcar cars={car} key={car.id}  />
              })
          }
          
      </div>
      <Footer/>
    </>



  )
}

export default Allcars