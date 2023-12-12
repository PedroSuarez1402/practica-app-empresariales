// apiService.js

const API_BASE_URL = 'http://localhost:4000'; // Actualiza con la URL de tu servidor

const apiService = {
    // Obtener la lista de usuarios
    getUsuarios: async () => {
        const response = await fetch(`${API_BASE_URL}/usuarios`);
        const data = await response.json();
        return data;
    },

    // Crear un nuevo usuario
    crearUsuario: async (nuevoUsuario) => {
        const response = await fetch(`${API_BASE_URL}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevoUsuario),
        });
        const data = await response.json();
        return data;
    },

    // Eliminar un usuario por ID
    eliminarUsuario: async (usuarioId) => {
        const response = await fetch(`${API_BASE_URL}/usuarios/${usuarioId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    },

    // Obtener la lista de historias clínicas
    getHistoriasClinicas: async () => {
        const response = await fetch(`${API_BASE_URL}/historial`);
        const data = await response.json();
        return data;
    },

    // Crear una nueva historia clínica
    crearHistoriaClinica: async (nuevaHistoriaClinica) => {
        const response = await fetch(`${API_BASE_URL}/historial`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaHistoriaClinica),
        });
        const data = await response.json();
        return data;
    },

    // Eliminar una historia clínica por ID
    eliminarHistoriaClinica: async (historiaClinicaId) => {
        const response = await fetch(`${API_BASE_URL}/historial/${historiaClinicaId}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    },
};

export default apiService;
