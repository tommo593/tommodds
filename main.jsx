
import React, { useState } from 'react';
import Modal from 'react-modal';

const MyModal= () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <></>
        <button onClick={toggleModal}>Open Modal</button>
        <Modal isOpen={isOpen} onRequestClose={toggleModal}>
            <h1>My Modal</h1>
            <p>This is my modal content</p>
            <button onClick={toggleModal}>Close Modal</button>
        </Modal>
        </>
    );
}

export default MyModal;