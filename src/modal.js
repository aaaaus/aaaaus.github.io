document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');

  //this returns an HTMLCollection, not a NodeList - cannot use forEach on this
  //const projectCards = document.getElementsByClassName('box');

  //this returns a NodeList
  const projectCards = document.querySelectorAll('button.project-button');

  projectCards.forEach(projectCard => {
    projectCard.addEventListener('click', () => {
      console.log('Clicked a project');
      modal.style.display = 'block';
    });
  });

  console.log(projectCards);
});
