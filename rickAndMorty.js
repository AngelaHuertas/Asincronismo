// Función para obtener personajes de la API de Rick and Morty
async function obtenerPersonajes() {
    const url = 'https://rickandmortyapi.com/api/character';
    
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        console.log('Personajes:', datos.results);
        
        // Muestra algunos detalles de los personajes
        datos.results.forEach(personaje => {
            console.log(`Nombre: ${personaje.name}, Especie: ${personaje.species}, Estado: ${personaje.status}`);
        });
    } catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }
}

// Llamar a la función para obtener personajes
obtenerPersonajes();
