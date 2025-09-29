document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error");

  let errorTimeout; // controla o tempo para esconder o erro

  // Função para mostrar erro
  function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.add("show");

    // Limpa timeout anterior (se houver)
    if (errorTimeout) clearTimeout(errorTimeout);

    // Esconde automaticamente após 3 segundos
    errorTimeout = setTimeout(() => {
      hideError();
    }, 3000);
  }

  // Função para esconder erro
  function hideError() {
    errorMsg.textContent = "";
    errorMsg.classList.remove("show");
  }

  // Redefine erro ao digitar novamente
  document.getElementById("username").addEventListener("input", hideError);
  document.getElementById("password").addEventListener("input", hideError);

  // Login de usuário
  if (username === "usuario123" && password === "123") {
    hideError();
    localStorage.setItem("logado", "usuario");
    window.location.href = "usuario.html";

  // Login de cozinheiro
  } else if (username === "cozinheiro123" && password === "456") {
    hideError();
    localStorage.setItem("logado", "cozinheiro");
    window.location.href = "cozinheiro.html";

  } else {
    showError("Usuário ou senha incorretos!");
  }
});