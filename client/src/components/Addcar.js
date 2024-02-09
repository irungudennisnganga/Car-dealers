import React, { useState } from 'react';
import './Addcar.css'

const Addcar = () => {
  const [name, setName] = useState('');
  const [ type, setType] = useState('');
  const [ model, setModel] = useState('');
  const [engine_number, setEngine] = useState('');
  const [millage, setMillage] = useState('');
  const [images, setImage]=useState('')
  const [engine_size, setEngineSize]=useState('')
  const [description, setDescription]=useState('')
  const [fuel_type, setFuel]=useState('')
  const [price, setPrice]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      name ,
      type ,
      model,
      engine_number,
      millage,
      images,
      engine_size,
      description,
      fuel_type ,
      price
    };

    fetch('/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    })
    .then(response => {
       response.json();
    })
   
  };

  return (
    <div className="event-form-container">
    
      <form  onSubmit={handleSubmit} className="event-form">
        <label>Name :</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        <br />
        <label>model :</label>
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
        <br />
        <label>Engine Number:
        <br />  
        <input type="text" value={engine_number} onChange={(e) => setEngine(e.target.value)} /></label>
        <br />
        <label>Engine Size:</label>
        <input type="text" value={engine_size} onChange={(e) => setEngineSize(e.target.value)} required />
        <br />
        <label>Millage :</label>
        <input type="text" value={millage} onChange={(e) => setMillage(e.target.value)} required />
        <br />
        <label>Image :</label>
        <input type="text" value={images} onChange={(e) => setImage(e.target.value)} required />
        <br />
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <br />
        <label>Fuel Type :</label>
        <input type="text" value={fuel_type } onChange={(e) => setFuel(e.target.value)} required />
        <br />
        <label>Price :</label>
        <input type="text" value={price } onChange={(e) => setPrice(e.target.value)} required />
        <br />
        <button type="submit">Create Car</button>
      </form>
    </div>
  );
};

export default Addcar;