document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');

  const modalDescription = document.getElementById('modal-description');

  //this returns an HTMLCollection, not a NodeList - cannot use forEach on this
  //const projectCards = document.getElementsByClassName('box');

  //this returns a NodeList
  const projectCards = document.querySelectorAll('button.project-button');

  let currentProject = {};

  //helper to set project on click
  function setCurrentProject(name) {
    projects.forEach(project => {
      if (project.name === name) {
        currentProject = project;
      }
    });
  }

  //helper to change modal inner HTML
  function renderModalContent(project) {
    console.log(`I am going to change the content to ${project.name} content`);
    const { name, year, technologies, description } = project;
    modalDescription.innerHTML = `${description}`;
  }

  projectCards.forEach(projectCard => {
    projectCard.addEventListener('click', () => {
      modal.style.display = 'block';
      setCurrentProject(event.target.id);
      renderModalContent(currentProject);
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
