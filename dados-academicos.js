document.addEventListener("DOMContentLoaded", () => {
  const nivelSelect = document.getElementById("nivel");
  const dynamicFields = document.getElementById("dynamic-fields");
  const turnoGroup = document.getElementById("turno-group");
  const btnContinuar = document.getElementById("btnContinuar");

  nivelSelect.addEventListener("change", () => {
    dynamicFields.innerHTML = "";
    turnoGroup.classList.add("hidden");
    btnContinuar.classList.add("hidden");

    if (nivelSelect.value === "basico") {
      renderBasicoFields();
    } else if (nivelSelect.value === "superior") {
      renderSuperiorFields();
    }
  });

  function renderBasicoFields() {
    dynamicFields.innerHTML = `
      <div class="form-group">
        <label for="tipoBasico">Tipo de Instituição</label>
        <select id="tipoBasico" required>
          <option value="">Selecione</option>
          <option value="privada">Privada</option>
          <option value="municipal">Municipal</option>
          <option value="estadual">Estadual</option>
          <option value="federal">Federal</option>
        </select>
      </div>
      <div id="instituicaoBasico"></div>
    `;

    document.getElementById("tipoBasico").addEventListener("change", (e) => {
      const tipo = e.target.value;
      const instituicaoDiv = document.getElementById("instituicaoBasico");

      let options = "";
      if (tipo === "privada") options = "<option>Colégio Alfa</option>";
      if (tipo === "municipal") options = "<option>Escola Municipal Sol Nascente</option>";
      if (tipo === "estadual") options = "<option>Escola Estadual Horizonte</option>";
      if (tipo === "federal") options = "<option>Colégio Federal do Brasil</option>";

      instituicaoDiv.innerHTML = `
        <div class="form-group">
          <label for="instBasico">Instituição</label>
          <select id="instBasico" required>${options}</select>
        </div>
        <div class="form-group">
          <label for="serie">Série</label>
          <select id="serie" required>
            <option value="">Selecione</option>
            <option>Nível 1</option>
            <option>Nível 2</option>
            <option>Nível 3</option>
            <option>Nível 4</option>
            <option>Nível 5</option>
            <option>1º Ano Fundamental</option>
            <option>2º Ano Fundamental</option>
            <option>3º Ano Fundamental</option>
            <option>4º Ano Fundamental</option>
            <option>5º Ano Fundamental</option>
            <option>6º Ano Fundamental</option>
            <option>7º Ano Fundamental</option>
            <option>8º Ano Fundamental</option>
            <option>9º Ano Fundamental</option>
            <option>1º Ano Médio</option>
            <option>2º Ano Médio</option>
            <option>3º Ano Médio</option>
          </select>
        </div>
        <div class="form-group">
          <label for="matricula">Matrícula</label>
          <input type="text" id="matricula" placeholder="Digite a matrícula" required>
        </div>
      `;
      turnoGroup.classList.remove("hidden");
      btnContinuar.classList.remove("hidden");
    });
  }

  function renderSuperiorFields() {
    dynamicFields.innerHTML = `
      <div class="form-group">
        <label for="tipoSuperior">Tipo de Instituição</label>
        <select id="tipoSuperior" required>
          <option value="">Selecione</option>
          <option value="privada">Privada</option>
          <option value="estadual">Estadual</option>
          <option value="federal">Federal</option>
        </select>
      </div>
      <div id="instituicaoSuperior"></div>
    `;

    document.getElementById("tipoSuperior").addEventListener("change", (e) => {
      const tipo = e.target.value;
      const instituicaoDiv = document.getElementById("instituicaoSuperior");

      let options = "";
      if (tipo === "privada") options = "<option>Universidade Nova Era</option>";
      if (tipo === "estadual") options = "<option>Universidade Estadual Aurora</option>";
      if (tipo === "federal") options = "<option>Universidade Federal do Sol</option>";

      instituicaoDiv.innerHTML = `
        <div class="form-group">
          <label for="instSuperior">Instituição</label>
          <select id="instSuperior" required>${options}</select>
        </div>
        <div class="form-group">
          <label for="semestreAtual">Semestre Atual</label>
          <input type="number" id="semestreAtual" min="1" placeholder="Ex: 3" required>
        </div>
        <div class="form-group">
          <label for="totalSemestres">Total de Semestres</label>
          <input type="number" id="totalSemestres" min="1" placeholder="Ex: 8" required>
        </div>
        <div class="form-group">
          <label for="curso">Curso</label>
          <input type="text" id="curso" placeholder="Ex: Engenharia de Software" required>
        </div>
      `;
      turnoGroup.classList.remove("hidden");
      btnContinuar.classList.remove("hidden");
    });
  }

  document.getElementById("academicosForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // Aqui você pode redirecionar para a próxima etapa
    window.location.href = "proxima-pagina.html";
  });
});
