document.addEventListener('DOMContentLoaded', () => {
  console.log('hello world');

  const austin = document.getElementById('austin');

  austin.addEventListener('click', () => {
    console.log('clicked the name');
    austin.style.color = '#a3e1b3';
  });
});
