document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Aqui você pode adicionar integração com backend
    alert(`Login efetuado!\nUsuário: ${email}`);
  });
});
