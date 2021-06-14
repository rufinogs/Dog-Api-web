import React, { useState, useEffect } from "react";
import getBreeds from '../helpers/getBreeds';
import Error from './Error';

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
    life_span: "10 - 15 years",
    temperament: "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
    breed_group: "Working",
    bred_for: "Bull-baiting, guardian"
  },
  {
    id: 2,
    name: "Golden Retriever",
    life_span: "10 - 12 years",
    temperament: "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
    breed_group: "Sporting",
    bred_for: "Retrieving"
  },
];

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
        .then((newBreeds) => {
            setBreeds(newBreeds);
        })
        .catch((error) => {
          console.log(error);
          setError("Error al cargar las razas");
        })
  }

  return (
    <>
      <select onChange={(e) => updateDog(e.target.value)}>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      
      { error && <Error error={error} /> }
      
    </>

  );
};

export default Select;
