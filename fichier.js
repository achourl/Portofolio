
// FILTRE
const categoryFilter = document.getElementById('categoryFilter');
const projects = document.getElementsByClassName('project');

categoryFilter.addEventListener('change', function() {
  const selectedCategory = categoryFilter.value;

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    if (selectedCategory === 'all' || project.classList.contains(selectedCategory)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  }
});
categoryFilter.value = 'all';

// PROJET
const element = document.querySelector('.agrandir');

element.addEventListener('mouseenter', function() {
  element.classList.add('agrandi');
});



// FORMULAIRE



// EN SAVOIR PLUS

const enSavoirPlusBtn = document.getElementById('enSavoirPlusBtn');
const informationsSupplementaires = document.getElementById('informationsSupplementaires');

enSavoirPlusBtn.addEventListener('click', function() {
  informationsSupplementaires.classList.toggle('hidden');
});


const sweepTitle = document.querySelector('.sweep-title');
const titleText = sweepTitle.getAttribute('data-text');

sweepTitle.textContent = '';

function typeEffect() {
  let currentIndex = 0;
  function typeChar() {
    if (currentIndex < titleText.length) {
      sweepTitle.textContent += titleText.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeChar, 100); 
    } else {

      sweepTitle.textContent = '';
      setTimeout(typeEffect, 4000);
    }
  }

  typeChar();
}

typeEffect();
           
// NAV MODE SOMBRE/CLAIR

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const localStorageKey = 'darkMode';
const isDarkMode = localStorage.getItem(localStorageKey) === 'true';
toggleButton.classList.toggle('active', isDarkMode);
body.classList.toggle('dark-mode', isDarkMode);

function toggleDarkMode() {
  const isActive = toggleButton.classList.toggle('active');
  body.classList.toggle('dark-mode', isActive);
  localStorage.setItem(localStorageKey, isActive.toString());
}
toggleButton.addEventListener('click', toggleDarkMode);


// BOUTON FLECHE
window.addEventListener('scroll', function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  

