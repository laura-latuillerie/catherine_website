// Tableau des chemins d'accès aux images
const images = [
 'assets/images/kirby-sticker.png',
 'assets/images/krang-sticker.png',
 'assets/images/jiggly-sticker.png'
];

// Sélectionner les deux emplacements d'images
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');

// Variable pour alterner entre les emplacements
let showInFirstSlot = true;

function afficherImageAleatoire() {
 // Choisir une image aléatoirement
 const randomImage = images[Math.floor(Math.random() * images.length)];

 // Créer un élément <img> pour l'image
 const imgElement = document.createElement('img');
 imgElement.src = randomImage;

 // Définir l'emplacement où afficher l'image (alternance)
 const currentSlot = showInFirstSlot ? slot1 : slot2;
 const otherSlot = showInFirstSlot ? slot2 : slot1;


 // Nettoyer les emplacements et afficher l'image
 currentSlot.innerHTML = '';
 currentSlot.appendChild(imgElement);

     // Alterner l'affichage entre les deux emplacements
    currentSlot.style.display = 'block';
    otherSlot.style.display = 'none';

 // Alterner pour l'emplacement suivant
 showInFirstSlot = !showInFirstSlot;

 // Supprimer l'image après 10 secondes
 setTimeout(() => {
     currentSlot.innerHTML = showInFirstSlot ? '' : '';
 }, 5000);
}

// Répéter la fonction toutes les 10 secondes
setInterval(afficherImageAleatoire, 10000);

// Lancer la première exécution immédiatement
afficherImageAleatoire();
