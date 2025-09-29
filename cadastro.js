const form = document.getElementById("cadastroForm");
const errorMsg = document.getElementById("error");
let errorTimeout;

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.add("show");
  if (errorTimeout) clearTimeout(errorTimeout);
  errorTimeout = setTimeout(() => {
    hideError();
  }, 3000);
}

function hideError() {
  errorMsg.textContent = "";
  errorMsg.classList.remove("show");
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (password !== confirmPassword) {
    showError("As senhas não coincidem!");
    return;
  }

  if (!username || !password) {
    showError("Preencha todos os campos!");
    return;
  }

  // Salvar usuário no localStorage
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some(u => u.username === username)) {
    showError("Usuário já existe!");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("logado", username); // loga automaticamente

  // Redireciona para tela de usuário
  window.location.href = "usuario.html";
});

// Limpar erro ao digitar
document.getElementById("username").addEventListener("input", hideError);
document.getElementById("password").addEventListener("input", hideError);
document.getElementById("confirmPassword").addEventListener("input", hideError);
