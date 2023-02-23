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

    if (localStorage.getItem("lang") == "eng") {
      el.textContent = translateLanteeng[lang]
    }
    if (localStorage.getItem("lang") == "rus") {
      el.textContent = translateLanterus[lang]
    }
    if (localStorage.getItem("lang") == "kaz") {
      el.textContent = translateLanteKaz[lang]
    }
  })
}
