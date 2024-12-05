$(document).ready(function () {
  let nome = prompt("qual seu nome");

  $(".nome").append(`<h2> Bem-Vindo ${nome} </h2>`);

  $(".new").on("click", function () {
    $(".paragrafo").append(
      "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.!</p>"
    );
  });

  $(".clean").on("click", function () {
    $(".paragrafo").empty();
  });
});
