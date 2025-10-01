const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
let errorTimeout;

// Funções de erro
function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.add("show");
  if (errorTimeout) clearTimeout(errorTimeout);
  errorTimeout = setTimeout(hideError, 3000);
}

function hideError() {
  errorMsg.textContent = "";
  errorMsg.classList.remove("show");
}

// Limpar erro ao digitar
[usernameInput, passwordInput].forEach(input => {
  input.addEventListener("input", hideError);
});

// Validação do submit
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Se algum campo estiver vazio
  if (!username || !password) {
    showError("Por favor, preencha todos os campos!");
    return;
  }

  // Login correto
  if (username === "usuario123" && password === "123") {
    localStorage.setItem("logado", "usuario");
    window.location.href = "usuario.html";

  } else if (username === "cozinheiro123" && password === "456") {
    localStorage.setItem("logado", "cozinheiro");
    window.location.href = "cozinheiro.html";

  } else {
    // Usuário ou senha incorretos
    showError("Usuário ou senha incorretos!");
  }
});
