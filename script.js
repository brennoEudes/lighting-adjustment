// Acessando os elementos
const colorPreview = document.querySelector(".preview");
const colorSlider = document.getElementById("hue-slider");
const brightnessSlider = document.getElementById("brightness-slider");
const contrastSlider = document.getElementById("contrast-slider");

// Funções para cada elemento

// 1º função p/color slider
colorSlider.addEventListener("input", function () {
  // JS escuta o elemento no HTML!
  const hue = this.value;
  const color = `hsl(${hue}, 100%, 50%)`; // hue é a cor, 100% é o contraste e 50% é o brilho!

  colorPreview.style.backgroundColor = color;
  colorPreview.style.boxShadow = `0px 0px 53px 13px ${color}`;

  console.log(color, hue);
});

// 2º função p/brightness slider
brightnessSlider.addEventListener("input", function () {
  // JS escuta o elemento no HTML!
  const brightness = this.value;

  colorPreview.style.filter = `brightness(${brightness}%)`;

  console.log(brightness);
});

// 3º função p/contrast slider
contrastSlider.addEventListener("input", function () {
    // JS escuta o elemento no HTML!
    const contrast = this.value;
  
    colorPreview.style.filter = `contrast(${contrast}%)`;
  
    console.log(contrast);
  });


