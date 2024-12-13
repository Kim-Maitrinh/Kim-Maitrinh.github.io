const projets = document.querySelectorAll('.projet');
const projetTitre = document.getElementById('projet-titre');

projets.forEach(projet => {
  const titre = projet.getAttribute('data-title');
  const imagesContainer = projet.querySelector('.hover-images');

  projet.addEventListener('mouseover', () => {
    projetTitre.textContent = titre;
    projetTitre.style.opacity = '1';
    imagesContainer.style.animationPlayState = 'running';
  });

  projet.addEventListener('mouseout', () => {
    projetTitre.style.opacity = '0';
    imagesContainer.style.animationPlayState = 'paused';
  });
});
