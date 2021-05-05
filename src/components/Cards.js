import React, { useState, useEffect } from 'react';
import './Cards.css';
import './BackModal.js';
// import './Searchbar.js';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button'

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
    // styling For Navbar
     const mySearchBar = {
        backgroundColor: "violet",
        padding: 20,
        
    };
    const inputbar = {
        padding: 10,
        innerWidth: 20,
        backgroundColor: "white",  
    };

 
    
    return (
        <div>
            <div>
                <Navbar style={mySearchBar} bg="light" variant="light">
<input style={inputbar}  placeholder="Search character" className="InputArea"/>
            </Navbar> 
            </div>

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
                                <button> Show More</button>
                            </div>
                        </div>
                    </div></p>
    )
        })
      ) : (
        <p>loading..</p>
            )}
        </div>
        </div>
    );
};

export default Cards;