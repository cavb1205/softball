const API_URL = import.meta.env.API_URL;

export const GET_PLAYERS = async function () {
    // Usamos fetch con la URL completa
    const response = await fetch(`${API_URL}/Jugadores`);
    
    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    // Si la respuesta es correcta, convertimos el cuerpo a JSON
    const PLAYERS = await response.json();
    
    return PLAYERS;
};