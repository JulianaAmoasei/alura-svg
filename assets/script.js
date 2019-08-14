import { Marola } from './Marola.js';

window.onload = () => {
  const efeitoMarola = document.getElementById("feTurb");
  let marola = new Marola()
  marola.marola(efeitoMarola)

  const cardEsq = document.querySelector(".card-esq")
  const cardDir = document.querySelector(".card-dir")

  window.addEventListener('scroll', scrollCards)
}
