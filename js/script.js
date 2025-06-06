import { translateLangEng, translateLangKaz, translateLangRus } from "./translate.js"

if (localStorage.getItem("lang") == undefined) {
  localStorage.setItem("lang", "kaz")
}

const langElems = [...document.querySelectorAll("[data-lang]")]
const elemsLang = document.querySelector(".langs")
elemsLang.value = localStorage.getItem("lang")
elemsLang.addEventListener("change", (el) => {
  const elItem = el.currentTarget.value
  // console.log(elItem)
  localStorage.removeItem("lang")
  localStorage.setItem("lang", elItem)

  updateLang()
})

updateLang()

function updateLang() {
  langElems.forEach((el) => {
    const lang = el.dataset.lang
    // console.log(el.value)

    if (localStorage.getItem("lang") == "eng") {
      if (el.placeholder != undefined && el.value != undefined) {
        el.placeholder = translateLangEng[lang]
        el.value = translateLangEng[lang]
      }
      else
        el.textContent = translateLangEng[lang]
    }

    if (localStorage.getItem("lang") == "rus") {
      if (el.placeholder != undefined && el.value != undefined) {
        el.placeholder = translateLangRus[lang]
        el.value = translateLangRus[lang]
      }
      else
        el.textContent = translateLangRus[lang]
    }

    if (localStorage.getItem("lang") == "kaz") {
      if (el.placeholder != undefined && el.value != undefined) {
        el.placeholder = translateLangKaz[lang]
        el.value = translateLangKaz[lang]
      }
      else
        el.textContent = translateLangKaz[lang]
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


document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("femida-link");
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (link) {
    if (/windows/i.test(userAgent)) {
      link.href = "https://play.google.com/store/apps/details?id=kz.itanalytics.zanger.zanger_mobile";
    } else if (/android/i.test(userAgent)) {
      link.href = "https://play.google.com/store/apps/details?id=kz.itanalytics.zanger.zanger_mobile";
    } else if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
      link.href = "https://apps.apple.com/kz/app/femida24/id6738701079";
    } else {
      link.href = "https://play.google.com/store/apps/details?id=kz.itanalytics.zanger.zanger_mobile";
    }
  }
});
