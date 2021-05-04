import React, { useState, useEffect } from 'react';
import './Cards.css';

function Cards() {
    const [characters, setCharacters] = useState([]);
    // const [isFlipped, setIsFlipped] = useState(false);

    const fetchApi = () => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then((response) => response.json())
            .then((data) => setCharacters(data.results));
    };
    useEffect(() => {
        fetchApi();
    });
    
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     setIsFlipped(!isFlipped);
    //     console.log("hello")

    // }
    return (
        <div>
            {characters.length !== 0 ? (
        characters.map((character) => {
            return(
                            <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <img src={character.image} alt="" />
                                </div>
                            <div class="flip-card-back">
                            <h1>{character.name}</h1>
                            <p>Species: {character.species}</p>
                            <p>Status : {character.status}</p>
                            </div>
                        </div>
                        </div>
    )
        })
      ) : (
        <p>loading..</p>
            )}
        </div>
    
    );
};

export default Cards;


// // <img src={character.image} alt="" />
//                 <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//                     <img onClick={(e)=>handleClick(e)} src={character.image} alt="" />
//          <div className="background" onClick={(e) => handleClick(e)}>Hello there</div>
//                 </ReactCardFlip>