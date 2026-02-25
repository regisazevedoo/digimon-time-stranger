<<<<<<< HEAD
console.log("JS carregou");

const nomeDigi = document.querySelector("#digi input[type='text']");
const btnProcDigi = document.querySelector("#digi input[type='submit']");
const resultado = document.querySelector("#resultado");
const procurarSection = document.querySelector(".procurar");

function procurarDigimon() {
  const nomeDigiValue = nomeDigi.value.toLowerCase();

  if (!nomeDigiValue) {
    resultado.innerHTML = "";
    resultado.classList.remove("mostrar");
    procurarSection.classList.remove("expandir");
    return;
  };

  const nomeFormatado =
    nomeDigiValue.charAt(0).toUpperCase() +
    nomeDigiValue.slice(1).toLowerCase();

  resultado.innerHTML = `
    <div class="card">
      <h3>${nomeFormatado}</h3>
      <img src="https://www.grindosaur.com/img/games/digimon-story-time-stranger/icons/${nomeDigiValue}-icon.png" alt="${nomeFormatado}">
      <p></p>
      <p></p>
      <a id="botaosabermais" href="https://www.grindosaur.com/en/games/digimon-story-time-stranger/digimon/${nomeDigiValue}" 
       target="_blank" >Ver perfil completo</a>
    </div>
  `;

  resultado.classList.remove("mostrar");
  void resultado.offsetWidth; 
  resultado.classList.add("mostrar");

  procurarSection.classList.remove("expandir");
  procurarSection.classList.add("expandir");
}

btnProcDigi.addEventListener("click", (e) => {
  e.preventDefault();
  procurarDigimon();
});

=======
console.log("JS carregou");

const nomeDigi = document.querySelector("#digi input[type='text']");
const btnProcDigi = document.querySelector("#digi input[type='submit']");
const resultado = document.querySelector("#resultado");
const procurarSection = document.querySelector(".procurar");

function procurarDigimon() {
  const nomeDigiValue = nomeDigi.value.toLowerCase();

  if (!nomeDigiValue) {
    resultado.innerHTML = "";
    resultado.classList.remove("mostrar");
    procurarSection.classList.remove("expandir");
    return;
  };

  const nomeFormatado =
    nomeDigiValue.charAt(0).toUpperCase() +
    nomeDigiValue.slice(1).toLowerCase();

  resultado.innerHTML = `
    <div class="card">
      <h3>${nomeFormatado}</h3>
      <img src="https://www.grindosaur.com/img/games/digimon-story-time-stranger/icons/${nomeDigiValue}-icon.png" alt="${nomeFormatado}">
      <p></p>
      <p></p>
      <a id="botaosabermais" href="https://www.grindosaur.com/en/games/digimon-story-time-stranger/digimon/${nomeDigiValue}" 
       target="_blank" >Ver perfil completo</a>
    </div>
  `;

  resultado.classList.remove("mostrar");
  void resultado.offsetWidth; 
  resultado.classList.add("mostrar");

  procurarSection.classList.remove("expandir");
  procurarSection.classList.add("expandir");
}

btnProcDigi.addEventListener("click", (e) => {
  e.preventDefault();
  procurarDigimon();
});

>>>>>>> ad1a1a4 (Salvando arquivos locais antes do pull)
