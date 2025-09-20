document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o formulário
  const cadastroForm = document.getElementById("cadastroForm");
  if (!cadastroForm) return;

  cadastroForm.addEventListener("submit", (e) => {
    e.preventDefault(); // impede o envio padrão

    // Coleta dados pessoais
    const nome = document.getElementById("nome")?.value || "";
    const cpf = document.getElementById("cpf")?.value || "";
    const dataNascimento = document.getElementById("dataNascimento")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const senha = document.getElementById("senha")?.value || "";

    // Coleta dados acadêmicos
    const nivel = document.getElementById("nivel")?.value || "";
    const instituicao = document.getElementById("instituicao")?.value || "";
    const serie = document.getElementById("serie")?.value || "";
    const semestre = document.getElementById("semestre")?.value || "";
    const matricula = document.getElementById("matricula")?.value || "";
    const curso = document.getElementById("curso")?.value || "";
    const turno = document.getElementById("turno")?.value || "";

    // Monta objeto de dados
    const data = {
      nome,
      cpf,
      dataNascimento,
      email,
      senha,
      nivel,
      instituicao,
      serieOuSemestre: serie || semestre,
      matriculaOuCurso: matricula || curso,
      turno
    };

    // URL do seu Web App
    const scriptURL = "https://script.google.com/macros/s/AKfycbzOsK9fWINq8BJ3DHNc_GpnpJ_ErHa33bu6xNXooYjRRMFsyb-LIscrsQ92nGWX1MYu/exec";

    // Envia dados para a planilha via Apps Script
    fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log("Salvo com sucesso:", res);
        // Redireciona para a próxima página
        window.location.href = "dados-academicos.html";
      })
      .catch(err => {
        console.error("Erro ao salvar:", err);
        alert("Erro ao salvar os dados. Tente novamente.");
      });
  });
});
