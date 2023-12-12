// ListaUsuarios.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import apiService from '../../API/apiService';
import CrearUsuarios from './CrearUsuario';

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await apiService.getUsuarios();
                setUsuarios(response);
            } catch (error) {
                console.error('Error al obtener la lista de usuarios: ', error.message);
            }
        };

        fetchUsuarios();
    }, [])

    const handleEliminarUsuario = async (id) => {
        try {
            await apiService.eliminarUsuario(id);
            const updatedUsuarios = usuarios.filter((usuarios) => usuarios._id !== id);
            setUsuarios(updatedUsuarios);
        } catch (error) {
            console.log('Error al eliminar el usuario: ', error.message)
        }
    };
    
    const handleGuardarUsuario = async (nuevoUsuario) => {
        try {
            const response = await apiService.crearUsuario(nuevoUsuario);
            const nuevoUsuarioGuardado = response; // Asegúrate de verificar la estructura de la respuesta
            setUsuarios([...usuarios, nuevoUsuarioGuardado]);
        } catch (error) {
            console.error('Error al guardar el usuario: ', error.message);
        }
    };
    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <CrearUsuarios onSave={handleGuardarUsuario} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario._id}>
                            <td>{usuario.name}</td>
                            <td>{usuario.lastname}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <Link to={`/usuarios/editar/${usuario._id}`}>
                                    <Button variant="info">Editar</Button>
                                </Link>
                                <Button
                                    variant="danger"
                                    onClick={() => handleEliminarUsuario(usuario._id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListaUsuarios;