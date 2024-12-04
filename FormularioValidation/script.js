var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var idade = document.getElementById("idade");
var observacao = document.getElementById("observacao");

function validarCampo(campo) {
  if (campo.value === "") {
    campo.classList.remove("is-valid");
    campo.classList.add("is-invalid");
  } else {
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
  }
}
document
  .querySelectorAll("#nome, #email, #telefone, #idade, #observacao")
  .forEach(function (campo) {
    campo.addEventListener("input", function () {
      validarCampo(campo);
    });
  });
