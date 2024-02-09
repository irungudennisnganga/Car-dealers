import React, { useState }  from 'react'
import {useParams } from 'react-router-dom'
import './Comments.css'
function Comment() {

let user_id=2
// let body="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
  const [body,setComment]=useState(" ")
  const {id} =useParams() 
  function handleSubmit(e){
    e.preventDefault()
    // console.log(comment)
    let car_id=id
    fetch(`/comments`,{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body: JSON.stringify({
        body,
        car_id,
        user_id
        

      }),
    })
    .then(response => {
      response.json();
   })
 
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <p>Add a comment on your thoughts on this vehicle</p>
        <input type='text'value={body} onChange={(e) => setComment(e.target.value)} required/>
        <input type='submit'/>
    </form>
  )
}

export default Comment