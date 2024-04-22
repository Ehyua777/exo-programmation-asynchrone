// Fonction simulée qui simule un appel d'API avec un délai
function simulateApiCall(data, delay) {
    return new Promise(resolve => setTimeout(() => resolve(data), delay));
}

// Fonction asynchrone qui effectue deux appels API simultanément
export async function concurrentRequests() {
    try {
        // Créez deux "promesses" qui simulent des appels d'API
        const apiCall1 = simulateApiCall({ data: "Réponse de l'API 1" }, 1000);
        const apiCall2 = simulateApiCall({ data: "Réponse de l'API 2" }, 1500);

        // Utilisez Promise.all pour attendre que les deux promesses soient résolues
        const results = await Promise.all([apiCall1, apiCall2]);

        // Les résultats sont un tableau contenant les réponses de chaque promesse dans l'ordre
        console.log("Résultats des deux appels API:", results);

        // Retourner les résultats combinés
        return results;
    } catch (error) {
        console.error("Erreur lors de l'exécution des appels API simultanés:", error);
    }
}