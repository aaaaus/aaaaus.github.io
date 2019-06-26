document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');
  const modalClose = document.getElementById('modal-close');

  const modalFeatureImage = document.getElementById('feature-image');
  const modalDescription = document.getElementById('modal-description');
  const modalSlideshow = document.getElementById('modal-slideshow');
  const modalTechnologies = document.getElementById('modal-technologies');
  const modalGithubLink = document.getElementById('modal-github-link');

  //this returns an HTMLCollection, not a NodeList - cannot use forEach on this
  //const projectCards = document.getElementsByClassName('box');

  //this returns a NodeList
  const projectCards = document.querySelectorAll('button.project-button');

  let currentProject = {};
  let galleryNodes = [];

  //OPEN AND RENDER MODAL HELPERS

  //helper to set project on click
  function setCurrentProject(name) {
    projects.forEach(project => {
      if (project.name === name) {
        currentProject = project;
      }
    });
  }

  //selects DOM nodes AFTER they exist
  function setGalleryNodes() {
    galleryNodes = document.querySelectorAll('.slideshow-image');
  }

  //changes src attribute of featured image based on slideshow image clicked
  function changeFeaturedImage(images, galleryNodes) {
    galleryNodes.forEach((node, index) => {
      node.addEventListener('click', () => {
        modalFeatureImage.src = `./assets/project-photos/${images[index]}`;
      });
    });
  }

  //helper to change modal inner HTML
  function renderModalContent(project) {
    const { name, year, technologies, description, images, github } = project;

    modalFeatureImage.src = `./assets/project-photos/${images[0]}`;
    modalTechnologies.innerHTML = `  ${technologies}`;
    modalDescription.innerHTML = `${description}`;
    // modalButton.onclick = function() {
    //   `location.href=${github}`;
    // };
    modalGithubLink.href = `${github}`;
    images.forEach(image => {
      modalSlideshow.innerHTML += `<div class="slideshow-frame"><img class="slideshow-image" src="./assets/project-photos/${image}" /></div>`;
      // modalSlideshow.innerHTML += `<div class="slideshow-frame"></div>`;
    });
    setGalleryNodes();
    changeFeaturedImage(images, galleryNodes);
  }

  //CLOSE MODAL HELPERS

  //close modal and clear slideshow innerHTML string
  function closeModal() {
    modal.style.display = 'none';
    modalSlideshow.innerHTML = '';
  }

  //blocks propogation of closing modal if clicking on modal content itself
  function preventHide(e) {
    e.stopPropagation();
  }

  //RUNTIME//

  //adds event listener to each project's "MORE INFO" button, updating value of 'currentProject'
  function modalOpenListeners() {
    projectCards.forEach(projectCard => {
      projectCard.addEventListener('click', () => {
        modal.style.display = 'block'; //display modal
        setCurrentProject(event.target.id); //sets project based on button id
        renderModalContent(currentProject); //render current project
      });
    });
  }

  //creates closing event listeners and blocks propogation when clicking on modal content itself
  function modalCloseListeners() {
    modal.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    modalContent.addEventListener('click', preventHide);
  }

  modalOpenListeners();
  modalCloseListeners();
});
