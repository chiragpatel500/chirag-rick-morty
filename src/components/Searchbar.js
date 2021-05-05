import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Searchbar() {
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
            <Navbar  style={mySearchBar} bg="light" variant="light">
            <input style={inputbar} type="text" placeholder="Search character" className="InputArea"/>
            </Navbar> 
        </div>
    )
}

export default Searchbar;
