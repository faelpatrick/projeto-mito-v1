let slides = [];
loadIndex();
function loadIndex() {
  fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
      slides = data;
      loadSlide(0); // Carregar o primeiro slide
      console.log("Slide carregado");
    })
    .catch((error) => console.error("Erro ao carregar o índice:", error));
}

function loadSlide(index) {
  const slide = slides[index];
  if (slide) {
    document.getElementById("slide-image").src =
      "slides/" + slide.slide + "/" + slide.imagem;
    document.getElementById("slide-audio").src =
      "slides/" + slide.slide + "/" + slide.audio;
    document.getElementById("slide-text").textContent = slide.texto;
  }
}

let currentSlide = 0;

function showNext() {
  currentSlide = (currentSlide + 1) % slides.length;
  loadSlide(currentSlide);
}

function showPrev() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  loadSlide(currentSlide);
}

document.getElementById("next").addEventListener("click", showNext);
document.getElementById("prev").addEventListener("click", showPrev);

window.onload = () => {
  // Inicializar slides e mostrar o primeiro
};
