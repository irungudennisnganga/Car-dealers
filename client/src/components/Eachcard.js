import React,{useEffect,useState} from 'react'
import {useParams } from 'react-router-dom'
function Card() {
    const [car, setcar]=useState([])
    const [comment,setcomment]=useState([])
    const {id} =useParams() 
    
   useEffect(() => {
    fetch(`/cars/${id}`)
    .then(r => r.json())
    .then(car =>setcar(car))
   },[])

   useEffect(() =>{
    fetch(`/comments`)
    .then(r => r.json())
    .then(comment =>setcomment(comment))
   },[])
    
  return (
  
    <div>
        <div   className="card">
       <div className="image-wrapper">
     
          <img src={car.images} alt='bot' />
     
         </div>
           <div className="text-box-wrapper">
              <div className="text-box">
                <h3  className="heading"><b>Name </b>:{car.name} </h3>
                <p className="text"><b>Type</b> :{car.type}  </p>
                <p className="text"><b>Description</b> : {car.description} </p>
                <p className="text"><b>Model</b>: {car.model}  </p>
                <p className="text"><b>Fuel Type</b> : {car.fuel_type}  </p> 
                <p className="text"><b>Millage </b>: {car.millage} </p> 
                <p className="text"><b>Engine </b>: {car.engine_size}  </p> 
                <h3 className="text"><b>Price </b>: {car.price}  </h3>
                
         
             </div>
           </div>
           <div>
            <h3>COMMENTS</h3>
                    {
                  comment.map(one =>{
                    if (one.user_id ===id){
                      return<p>{one.body}</p>
                    }
                    
                    
                  })
                }

               </div>
            
           </div>
          
        </div>
        
       
       
  )
}

export default Card