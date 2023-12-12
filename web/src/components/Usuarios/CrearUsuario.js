import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function CrearUsuarios({ onSave }) {
    const [show, setShow] = useState(false);
    const [usuario, setUsuario] = useState({
        name: '',
        lastname: '',
        email: ''
    });

    const handleClose = () => {
        setShow(false);
        setUsuario({
            name: '',
            lastname: '',
            email: ''
        });
    };

    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const handleGuardar = () => {
        onSave(usuario);
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Crear Usuario
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={usuario.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formLastname">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastname"
                                value={usuario.lastname}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={usuario.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleGuardar}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CrearUsuarios;
