import React, { useState, useEffect } from 'react';
import './Cards.css';
// import './BackModal.js';

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
                <div className="flip-card">
                            <div className = "flip-card-inner">
                                <div className = "flip-card-front">
                                <img src={character.image} alt="" />
                                </div>
                            <div className="flip-card-back">
                            <h1>{character.name}</h1>
                            {/* <p>Species: {character.species}</p>
                            <p>Status : {character.status}</p> */}
                            <button> Show More</button>
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