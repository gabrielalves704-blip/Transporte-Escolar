document.addEventListener("DOMContentLoaded", () => {
  const cadastroForm = document.getElementById("cadastroForm");

  cadastroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Coleta os dados do formulário
    const data = {
      nome: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
      dataNascimento: document.getElementById("dataNascimento").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("senha").value
    };

    // Envia os dados para a Netlify Function
    fetch("/.netlify/functions/saveForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log("Salvo com sucesso:", res);

        // Redireciona para a próxima página após salvar
        window.location.href = "dados-academicos.html";
      })
      .catch(err => {
        console.error("Erro ao salvar:", err);
        alert("Ocorreu um erro ao salvar os dados. Tente novamente.");
      });
  });
});
