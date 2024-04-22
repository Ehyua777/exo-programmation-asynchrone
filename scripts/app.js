import { tableau, iterateWithAsyncAwait } from "./iterateWithAsyncAwait.js";
// Exemple d'utilisation de la fonction
document.getElementById('iterateWithAsyncAwait').addEventListener('click', async (event) => {
    event.preventDefault(); // Empêche le lien de suivre son URL (qui est juste "#" ici)
    var values = tableau()
    await iterateWithAsyncAwait(values, 1);
    console.log("Toutes les valeurs ont été affichées avec un intervalle de 1 seconde.");
});

import { concurrentRequests } from "./concurrentRequests.js";
// Appel de la fonction concurrentRequests pour tester
document.getElementById('concurrentRequests').addEventListener('click', async (event) => {
    event.preventDefault(); // Empêche le lien de suivre son URL (qui est juste "#" ici)
    // Appel de la fonction concurrentRequests pour tester
    concurrentRequests().then(results => {
        if (results) {
            results.forEach((result, index) => {
                console.log(`Réponse ${index + 1}:`, result);
            });
        }
    });
});

import { urlsListing, parallelCalls } from "./parallelCalls.js";
document.getElementById('parallelCalls').addEventListener('click', async (event) => {
    event.preventDefault(); // Empêche le lien de suivre son URL (qui est juste "#" ici)
    // Appel de la fonction concurrentRequests pour tester
    var urls = urlsListing()
    /*const urls = [
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300/?blur'
    ];*/

    parallelCalls(urls)
        .then(responses => {
            console.log("Réponses obtenues:", responses);
            // Traitez les réponses ici
        })
        .catch(error => {
            console.error("Une erreur est survenue lors de l'exécution des appels parallèles:", error);
            // Gérez l'erreur ici si nécessaire
        });

});

import { chainedAsyncFunctions } from "./chainedAsyncFunctions.js";
document.getElementById('chainedAsyncFunctions').addEventListener('click', async (event) => {
    event.preventDefault(); // Empêche le lien de suivre son URL (qui est juste "#" ici)
    // Appel de la fonction concurrentRequests pour tester

    // Appel de la fonction chainedAsyncFunctions
    chainedAsyncFunctions();

});

import { awaitCall } from "./awaitCall.js"
document.getElementById('awaitCall').addEventListener('click', async (event) => {
    event.preventDefault(); // Empêche le lien de suivre son URL (qui est juste "#" ici)
    // Exemple d'utilisation de la fonction
    let apiUrl = prompt('Entrez une url');
    //const apiUrl = 'https://api.example.com/data';
    awaitCall(apiUrl);

});