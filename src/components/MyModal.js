// import React, { useState, useEffect } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function MyModal() {
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Show More
//         </Button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>{Character.name}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <img src={character.image} alt="images" />
//           <p>species:{character.species}</p>
//           <p>status:{character.status}</p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//   render(<MyModal />);

//   export default MyModal;