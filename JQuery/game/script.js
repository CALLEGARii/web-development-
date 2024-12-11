$(document).ready(function () {
  const $quadrados = $(".quadrado");
  let $quadradoSelecionado = null;

  $quadrados.on("click", function () {
    const $this = $(this);

    if ($this.hasClass("selecionado")) {
      $this.removeClass("selecionado");
      $quadradoSelecionado = null;
    } else if ($quadradoSelecionado) {
      alert(
        "ATENÇÃO! Já há um quadrado selecionado. Desselecione-o antes de selecionar outro."
      );
    } else {
      $this.addClass("selecionado");
      $quadradoSelecionado = $this;
    }
  });

  $(document).on("keydown", function (evento) {
    if (!$quadradoSelecionado) return;

    // Obtém as posições atuais do quadrado
    const currentLeft = parseInt($quadradoSelecionado.css("left")) || 0;
    const currentTop = parseInt($quadradoSelecionado.css("top")) || 0;
    let newLeft = currentLeft;
    let newTop = currentTop;

    switch (evento.key) {
      case "w":
      case "ArrowUp":
        newTop -= 10;
        break;
      case "a":
      case "ArrowLeft":
        newLeft -= 10;
        break;
      case "s":
      case "ArrowDown":
        newTop += 10;
        break;
      case "d":
      case "ArrowRight":
        newLeft += 10;
        break;
    }

    $quadradoSelecionado.css({ left: `${newLeft}px`, top: `${newTop}px` });
  });
});
