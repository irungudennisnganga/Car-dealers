import React, { useState } from 'react';
import  Eachcar  from './Eachcar'; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cars, setcars]=useState([]);

  const handleSearch = () => {
    fetch("https://cardealersgunicorn-app-app.onrender.com/cars")

        .then(r =>r.json())
        .then(data =>setcars(data))
    
    const results = cars.filter(car =>
      Object.values(car).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(results);
    console.log(results)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a vehicle"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
      {searchResults.map(car => (
          car ?<Eachcar key={car.id} cars={car} />: <h1>
            no car found
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Search;
