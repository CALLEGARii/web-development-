$(document).ready(function () {

    $("#lado").on("click", function () {
        $(this).css("backgroundColor", "#90ee90");
        $(this).css("opacity", 0.5);
        $(this).css("border-color", "#006400");

        $("#adicionar").on("click", function(){
            $("#text").append(
          "<p>Lorem</p>");
        });

            $("#clear").on("click", function () {
                $("#text").empty();
            });

            $("#adicionarimg").click(function(event) {
                event.preventDefault();
                const img = $("<img>");
                img.attr("alt", "Image");
                img.attr("src", "img/bola.png");
                $("#img").append(img);
              });

              $("#removerimg").click(function(event) {
                event.preventDefault();
                $("#img img").remove();
              });

            });     

    $("#lado2").on("click", function () {
        $(this).css("backgroundColor", "#90ee90");
        $(this).css("opacity", 0.5);
        $(this).css("border-color", "#006400");
        
        $("#adicionar").on("click", function(){
            $("#text2").append(
          "<p>Lorem</p>");
          $(this).css("text-alin", "right")
        });

        $("#clear").on("click", function () {
            $("#text2").empty();
        });
    });
});

