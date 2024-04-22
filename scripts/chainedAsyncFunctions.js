//Fonction de similation d'appels à deux API simultanémenty

// Fonction asynchrone qui enregistre un message après un délai d'une seconde
async function asyncFunction(message) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(message);
}

// Fonction qui enchaîne trois fonctions asynchrones de manière séquentielle
export async function chainedAsyncFunctions() {
    try {
        console.log("Début de l'exécution...");

        // Appel de la première fonction asynchrone
        await asyncFunction("Première fonction terminée.");

        // Appel de la deuxième fonction asynchrone après la première
        await asyncFunction("Deuxième fonction terminée.");

        // Appel de la troisième fonction asynchrone après la deuxième
        await asyncFunction("Troisième fonction terminée.");

        console.log("Fin de l'exécution.");
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
}