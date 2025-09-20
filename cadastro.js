document.addEventListener("DOMContentLoaded", () => {
  const cadastroForm = document.getElementById("cadastroForm");

  cadastroForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Captura os dados do formulário
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Objeto com os dados
    const data = { nome, cpf, dataNascimento, email, senha };

    try {
      // Chamada para a função serverless no Netlify
      const res = await fetch("/.netlify/functions/saveForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error(`Erro na requisição: ${res.status}`);
      }

      const result = await res.json();
      console.log("Salvo com sucesso:", result);

      // Redireciona para a próxima página
      window.location.href = "dados-academicos.html";
    } catch (err) {
      console.error("Erro ao salvar:", err);
      alert("Não foi possível salvar os dados. Tente novamente mais tarde.");
    }
  });
});
