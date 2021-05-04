import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Cards.css';
import SideA from './SideA';
import SideB from './SideB';

function Cards() {
    const [characters, setCharacters] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    const fetchApi = () => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then((response) => response.json())
            .then((data) => setCharacters(data.results));
    };
    useEffect(() => {
        fetchApi();
    });
    
    const handleClick = (e) => {
        e.preventDefault()
        setIsFlipped(!isFlipped);

    }
    return (
        <div>
            {characters.length !== 0 ? (
        characters.map((character) => {
            return(
            // <img src={character.image} alt="" />
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <img onClick={(e)=>handleClick(e)} src={character.image} alt="" />
         <div className="background" onClick={(e) => handleClick(e)}>Hello there</div>
                </ReactCardFlip>
    )
        })
      ) : (
        <p>loading..</p>
            )}
        </div>
    
    );
};

export default Cards;