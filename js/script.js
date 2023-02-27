import { translateLanteeng, translateLanterus, translateLanteKaz } from "./translate.js"

if (localStorage.getItem("lang") == undefined) {
  localStorage.setItem("lang", "rus")
}

const langElems = [...document.querySelectorAll("[data-lang]")]
const elemsLang = document.querySelector(".langs")
elemsLang.value = localStorage.getItem("lang")
elemsLang.addEventListener("change", (el) => {
  const elItem = el.currentTarget.value
  console.log(elItem)
  localStorage.removeItem("lang")
  localStorage.setItem("lang", elItem)

  updateLang()
})

updateLang()

function updateLang() {
  langElems.forEach((el) => {
    const lang = el.dataset.lang
    console.log(el.value)

    if (localStorage.getItem("lang") == "eng") {
      if (el.placeholder != undefined && el.value != undefined) {
        el.placeholder = translateLanteeng[lang]
        el.value = translateLanteeng[lang]
      }
      else
        el.textContent = translateLanteeng[lang]
    }

    if (localStorage.getItem("lang") == "rus") {
      if (el.placeholder != undefined && el.value != undefined) {
        el.placeholder = translateLanterus[lang]
        el.value = translateLanterus[lang]
      }
      else
        el.textContent = translateLanterus[lang]
    }

    if (localStorage.getItem("lang") == "kaz") {
      if (el.placeholder != undefined && el.value != undefined) {
        el.placeholder = translateLanteKaz[lang]
        el.value = translateLanteKaz[lang]
      }
      else
        el.textContent = translateLanteKaz[lang]
    }
  })
}

const qualityImgs = document.querySelectorAll('.quality__img');

qualityImgs.forEach(img => {
  img.addEventListener('click', () => {
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen');
    document.body.appendChild(fullscreenDiv);

    const clickedImg = event.target;
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = clickedImg.src;
    fullscreenImg.alt = clickedImg.alt;
    fullscreenImg.classList.add('fullscreen__img');
    fullscreenDiv.appendChild(fullscreenImg);

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.classList.add('fullscreen__close');
    fullscreenDiv.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
      fullscreenDiv.remove();
      document.body.style.overflow = '';
    });

    fullscreenDiv.addEventListener('click', (event) => {
      if (event.target === fullscreenDiv) {
        fullscreenDiv.remove();
        document.body.style.overflow = '';
      }
    });

  });
});


