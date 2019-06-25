document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
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

  //HELPERS//

  //helper to set project on click
  function setCurrentProject(name) {
    projects.forEach(project => {
      if (project.name === name) {
        currentProject = project;
      }
    });
  }

  function setGalleryNodes() {
    galleryNodes = document.querySelectorAll('.slideshow-image');
  }

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
    modalTechnologies.innerHTML = `${technologies}`;
    modalDescription.innerHTML = `${description}`;
    modalGithubLink.href = `${github}`;
    images.forEach(image => {
      modalSlideshow.innerHTML += `<div class="slideshow-frame"><img class="slideshow-image" src="./assets/project-photos/${image}" /></div>`;
      // modalSlideshow.innerHTML += `<div class="slideshow-frame"></div>`;
    });
    setGalleryNodes();
    changeFeaturedImage(images, galleryNodes);
  }

  //RUNTIME//

  //adds event listener to each project's "MORE INFO" button, updating value of 'currentProject'
  projectCards.forEach(projectCard => {
    projectCard.addEventListener('click', () => {
      modal.style.display = 'block';
      setCurrentProject(event.target.id);
      renderModalContent(currentProject);
    });
  });

  //adds event listener to close button; clears slideshow innerHTML
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modalSlideshow.innerHTML = '';
    //dump all other attributes too
  });
});
