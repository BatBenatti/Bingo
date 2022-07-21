const botao = document.querySelector(".botao");
const sorteio = document.querySelector(".sorteio");
const resto = document.getElementById("Resto");
const bola = document.querySelectorAll(".bola");
let inicio = 0;

botao.addEventListener("click", () => {
  contar();
  setTimeout(() => {
    pickRandom();
  }, 1100);

  const resto = document.getElementById("Resto");

  inicio++;
  if (inicio === 75) {
    resto.innerText = `As bolas acabaram`;
  }
  if (inicio > 75) {
    resto.innerText = `As bolas acabaram`;
  }
  if (inicio === 0) {
    resto.innerText = "Pronto para começar";
  }
  if (inicio > 0 && inicio < 75) {
    resto.innerText = `Já foram sorteadas ${inicio} bolas`;
  }
});

function contar() {
  const times = 8;

  const interval = setInterval(() => {
    const randomTag = pickRandom1();

    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 80);
    }
  }, 80);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {}, 80);
  }, times * 80);
}
function pickRandom1() {
  const tags = document.querySelectorAll(".bola");
  const sorteio = document.querySelector(".sorteio");
  const random = tags[Math.floor(Math.random() * tags.length)];
  sorteio.innerText = random.textContent;
  return tags[Math.floor(Math.random() * tags.length)];
}

function pickRandom() {
  const tags = document.querySelectorAll(".bola");
  const sorteio = document.querySelector(".sorteio");
  const random = tags[Math.floor(Math.random() * tags.length)];
  if (random.textContent >= 1 && random.textContent <= 15) {
    sorteio.innerText = `B ${random.textContent}`;
  }
  if (random.textContent >= 16 && random.textContent <= 30) {
    sorteio.innerText = `I ${random.textContent}`;
  }
  if (random.textContent >= 31 && random.textContent <= 45) {
    sorteio.innerText = `N ${random.textContent}`;
  }
  if (random.textContent >= 46 && random.textContent <= 60) {
    sorteio.innerText = `G ${random.textContent}`;
  }
  if (random.textContent >= 61 && random.textContent <= 75) {
    sorteio.innerText = `O ${random.textContent}`;
  }

  random.classList.remove("bola");
  random.classList.add("a-bola");
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
