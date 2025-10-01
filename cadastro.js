const cadastroForm = document.getElementById("cadastroForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
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
[usernameInput, passwordInput, confirmPasswordInput].forEach(input => {
  input.addEventListener("input", hideError);
});

// Validação do submit
cadastroForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // 1️⃣ Checar se algum campo está vazio
  if (!username || !password || !confirmPassword) {
    showError("Por favor, preencha todos os campos!");
    return;
  }

  // 2️⃣ Checar se as senhas coincidem
  if (password !== confirmPassword) {
    showError("As senhas não coincidem!");
    return;
  }

  // 3️⃣ Checar se usuário já existe
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some(u => u.username === username)) {
    showError("Usuário já existe!");
    return;
  }

  // 4️⃣ Salvar usuário e logar automaticamente
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("logado", username);

  // 5️⃣ Redirecionar para tela de usuário
  window.location.href = "usuario.html";
});
