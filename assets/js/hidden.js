// Images dans l'ordre voulu
const images = [
  'assets/images/kirby-sticker.png',
  'assets/images/krang-sticker.png',
  'assets/images/jiggly-sticker.png'
];

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');

let index = 0;
let showInFirstSlot = true;

function afficherImage() {
  const img = document.createElement('img');
  img.src = images[index];

  const currentSlot = showInFirstSlot ? slot1 : slot2;
  const otherSlot = showInFirstSlot ? slot2 : slot1;

  // Nettoyage
  currentSlot.innerHTML = '';
  otherSlot.innerHTML = '';

  // Affichage
  currentSlot.appendChild(img);
  currentSlot.style.display = 'block';
  otherSlot.style.display = 'none';

  // Masquer après 2 secondes
  setTimeout(() => {
    currentSlot.style.display = 'none';
    currentSlot.innerHTML = '';
  }, 2000);

  // Image suivante (boucle)
  index = (index + 1) % images.length;
  showInFirstSlot = !showInFirstSlot;
}

// Lancer immédiatement
afficherImage();

// Nouvelle image toutes les 5 secondes
setInterval(afficherImage, 5000);
