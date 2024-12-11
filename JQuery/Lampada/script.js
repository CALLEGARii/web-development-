$(document).ready(function () {
  $("#img img").on("mouseover", function () {
    const $imgElement = $("#img img");

    if ($imgElement.attr("src").includes("img/lampada.png")) {
      $("body").css("backgroundColor", "white");
      $("h1").css("color", "black");
      $("h2").css("color", "black").text("Lâmpada acesa");
      $imgElement.attr("src", "img/lampada-acesa.png");
    } else {
      $("body").css("backgroundColor", "black");
      $("h1").css("color", "white");
      $("h2").css("color", "white").text("Lâmpada apagada");
      $imgElement.attr("src", "img/lampada.png");
    }
  });
});
