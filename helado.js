// Funciones asíncronas para cada paso en la preparación del helado

const prepararIngredientes = async () => {
    console.log("Preparando ingredientes: leche, azúcar, y saborizantes...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Ingredientes listos.");
            resolve();
        }, 2000); // Simula un tiempo de preparación de 2 segundos
    });
};

const mezclarIngredientes = async () => {
    console.log("Mezclando ingredientes...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Ingredientes mezclados.");
            resolve();
        }, 3000); // Simula un tiempo de mezcla de 3 segundos
    });
};

const enfriarMezcla = async () => {
    console.log("Enfriando la mezcla...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Mezcla enfriada.");
            resolve();
        }, 5000); // Simula un tiempo de enfriamiento de 5 segundos
    });
};

const batirHelado = async () => {
    console.log("Batindo la mezcla...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Helado batido y cremoso.");
            resolve();
        }, 4000); // Simula un tiempo de batido de 4 segundos
    });
};

const servirHelado = async () => {
    console.log("Sirviendo el helado...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("¡Helado servido! ¡Disfruta!");
            resolve();
        }, 2000); // Simula un tiempo de servir de 2 segundos
    });
};

// Función principal para hacer helado usando async/await
const hacerHelado = async () => {
    await prepararIngredientes();
    await mezclarIngredientes();
    await enfriarMezcla();
    await batirHelado();
    await servirHelado();
};

// Ejecutar la función principal
hacerHelado();
