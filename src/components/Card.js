import React from 'react'
import Spinner from './Spinner';

const Card = ({ dog, loading, updateDog }) => {

    if(loading) return <Spinner />

    return (
        <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
            <img 
                src={dog.image}
                alt="dog"
            />
            <p>
                Breed: {dog.breed.name} 
            <p></p>
                Life Span: {dog.breed.life_span} 
                <p></p>
                Temperament: {dog.breed.temperament}
                <p></p>
                Breed Group: {dog.breed.breed_group}
                <p></p>
                Breed Used For: {dog.breed.bred_for}
                <p></p>
            </p>
        </div>
    )
}

export default Card
