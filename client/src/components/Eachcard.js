import React,{useEffect,useState} from 'react'
import {useParams } from 'react-router-dom'
import Comment from './Comment'
import './Eachcard.css'
import Footer from './Footer'
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
   
   function handleClick(id){
    console.log(id)
    fetch(`/comments/${id}`,{
      method:"DELETE",
      headers:{
        "content-Type":"application.json"
      }
    })
    setcomment(comment)
   }
    
  return (
  
    <>
    <div>
        <div className="card">
       <div className="image-wrapper">
     
          <img src={car.images} alt='bot' />
     
         </div>
           <div className="text-box-wrapper">
              <div className="text-box">
                <h3  className="heading"><b>Name </b>:{car.name} </h3>
                <p className="text"><b>Type</b> :{car.type}  </p>
                <p className="text"><b>Description</b> : {car.description} </p>
                <p className="text"><b>Model</b>: {car.model}  </p> <br />
                <p className="text"><b>Fuel Type</b> : {car.fuel_type}  </p>
                <p className="text"><b>Millage </b>: {car.millage} </p> 
                <p className="text"><b>Engine </b>: {car.engine_size}  </p>
                <h3 className="text"><b>Price </b>: ksh {car.price}  </h3>
             </div>
           </div>
           <div>

            </div>
           
           </div>
           
        </div>   
          <h3>COMMENTS</h3>
          <Comment  /><br />
           {
                comment.map(one => {
                 if (one.car_id == id) {
                   return (
                     <div key={one.id} className="comment">
                       <p className="comment-text">{one.body}</p>
                       <button onClick={() => handleClick(one.id)} className="comment-delete">🚮</button>
                     </div>
                   );
                 }
               })
           }
           <Footer />
    </>  
  )
}

export default Card