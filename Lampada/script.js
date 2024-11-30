document.querySelector("#img img").addEventListener("click", function () {
  const imgElement = document.querySelector("#img img");

  if (imgElement.src.includes("img/lampada.png")) {
    document.body.style.backgroundColor = "white";
    document.querySelector("h1").style.color = "black";
    document.querySelector("h2").style.color = "black";
    imgElement.src = "img/lampada-acesa.png";
  } else {
    
    document.body.style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
    document.querySelector("h2").style.color = "white";
    imgElement.src = "img/lampada.png";
  }
});
