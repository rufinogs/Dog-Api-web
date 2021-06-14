import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import Card from './components/Card';
import getDog from './helpers/getDog';
import Error from './components/Error';

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: "",
    life_span: "",
    temperament: "",
    breed_group: "",
    bred_for: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error loading the dog")
        setLoading(false);
      })
  }
  
  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      
      { error && <Error error={error} /> }

      <Card dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  );
}

export default App;
