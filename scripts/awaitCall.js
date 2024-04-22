export async function awaitCall(apiUrl) {
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('La récupération des données a échoué : ' + response.status);
        }
        let data = await response.json();
        console.log('Données récupérées:', data);
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
    }
}
