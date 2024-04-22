// Fonction asynchrone qui récupère les données de chaque URL simultanément
export async function parallelCalls(urls) {
    try {
        // Créez un tableau de promesses pour les appels à chaque URL
        const requests = urls.map(url =>
            fetch(url).then(response => response.json())
        );

        // Utilisez Promise.all pour attendre que toutes les promesses soient résolues
        const responses = await Promise.all(requests);

        // Retourner les réponses une fois que toutes les requêtes sont terminées
        return responses;
    } catch (error) {
        console.error("Erreur lors de l'exécution des appels parallèles:", error);
        throw error; // Vous pouvez choisir de gérer l'erreur ici ou la laisser être gérée par le code appelant
    }
}

// Exemple d'utilisation de la fonction parallelCalls
export function urlsListing() {
    var array = [];
    var values;
    do {
        values = prompt("Entrez plusieurs URL et taper fin quand vous aurez fini :");
        if (values !== "fin" && values !== null) {
            array.push(values);
        }
    } while (values !== "fin" && values !== null);
    return array
}