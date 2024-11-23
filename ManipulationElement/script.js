var nome = prompt("Qual seu nome?");

document.body.innerHTML += `<p id = "large">Seja Bem Vindo <b>${nome}</b></p>`;
document.querySelector("#large").style.fontSize = "25px";

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.new').addEventListener('click', function(event) {
    event.preventDefault();
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    document.querySelector('.center').appendChild(p);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.clean').addEventListener('click', function(event) {
    event.preventDefault();
    const paragraphs = document.querySelectorAll('.center p');
    paragraphs.forEach(function(paragraph) {
      paragraph.remove();
    });
  });
});




