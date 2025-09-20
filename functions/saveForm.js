fetch("/.netlify/functions/saveForm", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res => {
  console.log("Salvo com sucesso:", res);
  window.location.href = "dados-academicos.html";
})
.catch(err => console.error("Erro ao salvar:", err));
