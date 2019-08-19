import { Marola } from './Marola.js';
import { Cards } from './Cards.js';
import { Figuras } from './Figuras.js';

window.onload = () => {
  let marola = new Marola()
  marola.marola()

  let animaFiguras = new Figuras()
  animaFiguras.figuras()

  let animaCards = new Cards()
  document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));
}
