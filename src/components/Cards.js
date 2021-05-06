import React, { useState, useEffect } from 'react';
import './Cards.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import { findByLabelText } from '@testing-library/dom';


function Cards() {
    const [characters, setCharacters] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    // Modal state
    const [show, setShow] = useState(false);
    const handleClose = () => setactiveIndex(null);
    const [activeIndex, setactiveIndex] = useState(null);
    const handleShow = (index) => setactiveIndex(index);

    

    const fetchApi = () => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then((response) => response.json())
            .then((data) => setCharacters(data.results));
    };
    const handleSearchInputChange = (event) => {
     setSearchText(event.target.value);
    };
    const filteredCharacter = characters.filter((character) => {
        return character.name.toUpperCase().includes(searchText.toUpperCase());
    });
    
    useEffect(() => {
        fetchApi();
    });
        

    return (
        <div>
            <div>
                <Navbar className ="navbar navbar navbar-expand">
                    <input placeholder = "Search character" id="searchInput" type="text" onChange={handleSearchInputChange}/>
            </Navbar> 
            </div>

        <div className="flip-container">
            {characters.length !== 0 ? (
        filteredCharacter.map((character,index) => {
            return (
                <p>
                    {/* <cards currentCharacter={character} /> */}
        
                                            <div className="flip-card">
                                            <div className = "flip-card-inner">
                                                <div className = "flip-card-front">
                                                <img src={character.image} alt="" />
                                                </div>
                                            <div className="flip-card-back">
                                            <h1>{character.name}</h1>      
                                            <Button variant="primary" onClick={()=>handleShow(index)}>Show More</Button>  
                                            </div>
                                             </div>
                                            </div>
                       
                    <Modal show={activeIndex === index} onHide={handleClose}>
                    <ModalHeader closeButton>
                        <ModalTitle>{character.name}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <img src={character.image} alt=""/>
                        <h5>species:{character.species}</h5> 
                        <h5>status:{character.status}</h5>
                    </ModalBody>
                        </Modal>
                    
            </p>
        
                  
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




