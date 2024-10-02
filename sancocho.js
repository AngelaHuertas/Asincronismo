// Funciones asíncronas para cada paso en la preparación del sancocho

const prepararIngredientes = async () => {
    console.log("Preparando ingredientes...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Ingredientes listos: carne, yuca, plátano, papa, cebolla, ajo, especias.");
            resolve();
        }, 2000); // Simula un tiempo de preparación de 2 segundos
    });
};

const hervirAgua = async () => {
    console.log("Hirviendo agua...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Agua hirviendo.");
            resolve();
        }, 3000); // Simula un tiempo de hervir agua de 3 segundos
    });
};

const cocinarIngredientes = async () => {
    console.log("Cocinando los ingredientes...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Ingredientes cocidos y listos.");
            resolve();
        }, 5000); // Simula un tiempo de cocción de 5 segundos
    });
};

const servirSancocho = async () => {
    console.log("Sirviendo el sancocho...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Sancocho servido. ¡Buen provecho!");
            resolve();
        }, 2000); // Simula un tiempo de servir de 2 segundos
    });
};

// Función principal para preparar el sancocho usando async/await
const hacerSancocho = async () => {
    await prepararIngredientes();
    await hervirAgua();
    await cocinarIngredientes();
    await servirSancocho();
};

// Ejecutar la función principal
hacerSancocho();
