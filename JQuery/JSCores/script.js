$(document).ready(function () {
  let selectedColor = "";
  const $previewText = $(".preview-text");

  $(".color-button").on("mouseover", function () {
      const color = $(this).data("color");
      $("body").css("backgroundColor", selectedColor || color);
      $previewText.show().css({ color: "black", fontFamily: "sans-serif" });
  });

  $(".color-button").on("mouseout", function () {
      $("body").css("backgroundColor", selectedColor || "");
      $previewText.hide();
  });

  $(".color-button").on("click", function () {
      selectedColor = $(this).data("color");
      $("body").css("backgroundColor", selectedColor);
      $previewText.hide();

      $(".color-button").on("mouseover", function () {
          const hoverColor = $(this).data("color");
          $("body").css("backgroundColor", hoverColor);
      }).on("mouseout", function () {
          $("body").css("backgroundColor", selectedColor);
      });
  });

  $(".clean").on("click", function () {
      selectedColor = "";
      $("body").css("backgroundColor", "");
      $previewText.hide();
  });
});
