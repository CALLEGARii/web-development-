document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
      showAlert("Por favor, preencha todos os campos obrigatórios!", "danger");
      return;
    }
    showAlert("Cadastro realizado com sucesso!", "success");
    form.reset();
  });

  function showAlert(message, type) {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.textContent = message;

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "alert");
    alertDiv.appendChild(closeButton);

    form.prepend(alertDiv);
    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  }
});
