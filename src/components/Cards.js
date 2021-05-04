import React, { useState, useEffect } from 'react';
import './Cards.css';
import './BackModal.js';
import Button from 'react-bootstrap/Button'

function Cards() {
    const [characters, setCharacters] = useState([]);
    // const [isFlipped, setIsFlipped] = useState(false);
    // const [modalShow, setModalShow] = React.useState(false);

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
        <div className="flip-container">
            {characters.length !== 0 ? (
        characters.map((character) => {
            return (
           <p>
                <div className="flip-card">
                            <div className = "flip-card-inner">
                                <div className = "flip-card-front">
                                <img src={character.image} alt="" />
                                </div>
                            <div className="flip-card-back">
                            <h1>{character.name}</h1>
                            {/* <p>Species: {character.species}</p>
                            <p>Status : {character.status}</p> */}
                                
{/* <Button size="small" onClick={openModal} value={id}></Button> */}
                                <button> Show More</button>
    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        show more
      </Button> */}
                            </div>
                        </div>
                    </div></p>
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