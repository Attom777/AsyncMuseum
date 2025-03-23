console.log("Fichier billetterie.js chargé");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM chargé");

    const form = document.querySelector('form');
    console.log("Formulaire trouvé:", form);

    if (form) {
        form.addEventListener('submit', function(event) {
            console.log("Formulaire soumis");
            event.preventDefault();

            alert('Réservation effectuée avec succès !');
            // Commentez la ligne suivante pour empêcher la soumission réelle du formulaire
            // form.submit();
        });
    } else {
        console.error("Le formulaire n'a pas été trouvé");
    }
});

// Ajoutons un gestionnaire d'événements directement sur le bouton
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            console.log("Bouton cliqué");
            event.preventDefault();
            alert('Bouton de réservation cliqué !');
        });
    } else {
        console.error("Le bouton de soumission n'a pas été trouvé");
    }
});
