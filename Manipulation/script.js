document.addEventListener("DOMContentLoaded", function () {
  var counter = 1;
  document
    .querySelector("#adicionar")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const p = document.createElement("p");
      p.textContent = `#${counter} Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
      document.querySelector("#text").appendChild(p);
      counter++;
    });

  document.querySelector("#clear").addEventListener("click", function (event) {
    event.preventDefault();
    const paragraphs = document.querySelector(`p`);
    paragraphs.remove();
  });

  document
    .querySelector("#clearUltimo")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const paragraphs = document.querySelectorAll("#text > *");
      if (paragraphs.length > 0) {
        const ultimoElemento = paragraphs[paragraphs.length - 1];
        ultimoElemento.parentNode.removeChild(ultimoElemento);
      }
    });

  document
    .querySelector("#clearTodos")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const paragraphs = document.querySelectorAll(`p`);
      paragraphs.forEach((paragraphs) => paragraphs.remove());
    });

  document
    .querySelector("#adicionarimg")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const img = document.createElement("img");
      img.alt = "Image";
      img.src = "img/gatinho.jpg";
      document.querySelector("#img").appendChild(img);
    });

  document
    .querySelector("#btnradio2")
    .addEventListener("click", function (event) {
      document.querySelector("#lado").style.textAlign = "right";

      document
        .querySelector("#btnradio1")
        .addEventListener("click", function (event) {
          document.querySelector("#lado").style.textAlign = "left";
        });
    });

  document
    .querySelector("#removerimg")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const img = document.querySelector("#img img");
      img.remove();
    });

  document
    .querySelector("#removerimgAll")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const img = document.querySelectorAll(`#img img`);
      img.forEach((img) => img.remove());
    });
});
