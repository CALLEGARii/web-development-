// Variável para armazenar a cor selecionada
let selectedColor = "";
const colorButtons = document.querySelectorAll(".color-button");
const previewText = document.querySelector(".preview-text");

colorButtons.forEach((button) => {

  button.addEventListener("mouseover", () => {
    if (!selectedColor) {
      document.body.style.backgroundColor = button.dataset.color;
      previewText.style.display = "block";

    } else {
      document.body.style.backgroundColor = selectedColor;
      previewText.style.display = "block";
    }

    previewText.style.color = "black";
    previewText.style.fontFamily = "sans-serif";
  });

  button.addEventListener("mouseout", () => {
    if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
      previewText.style.display = "none";
      
    } else {
      document.body.style.backgroundColor = "";
      previewText.style.display = "none";
    }
  });

  button.addEventListener("click", () => {

    selectedColor = button.dataset.color;
    document.body.style.backgroundColor = selectedColor;
    previewText.style.display = "none";

    colorButtons.forEach((btn) => {

      btn.addEventListener("mouseover", () => {
        document.body.style.backgroundColor = btn.dataset.color;
      });
      btn.addEventListener("mouseout", () => {
        document.body.style.backgroundColor = selectedColor;
      });
    });
  });
});

document.querySelector(".clean").addEventListener("click", () => {
  document.body.style.backgroundColor = "";
  selectedColor = "";
  previewText.style.display = "none";
});
