export async function iterateWithAsyncAwait(array, timeLimit) {
    // Cette fonction crée un délai de 1 seconde
    function delay(s) {
        return new Promise(resolve => setTimeout(resolve, s * 1000));
    }

    // Boucle sur le tableau de valeurs
    for (const value of array) {
        console.log(value);    // Affiche la valeur courante
        await delay(timeLimit);     // Attend 1 seconde avant de continuer
    }
}
//Remplissage du tableau par l'utilisaterur
export function tableau() {
    var array = [];
    var values;
    do {
        values = prompt("Entrez plusieurs nombres au hazard et taper fin quand vous aurez fini :");
        if (values !== "fin" && values !== null) {
            array.push(values);
        }
    } while (values !== "fin" && values !== null);
    return array
}


