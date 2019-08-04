// const figura = document.querySelectorAll('.figura')

// figura.forEach((figura) => {
//     figura.addEventListener("mouseover", () => {
//       fazerFiguraDancar(figura);
//     });
// });

// function fazerFiguraDancar(figura){
//     figura.classList.toggle('dancinha')
// }

const figuras = document.querySelectorAll(".figura")
TweenMax.to(figuras, 0.5, {scale: 0.95, repeat: -1, yoyo: true})

let posicaoScrollAtual = 0;
let rolagem = false;

const cardEsq = document.querySelector(".card-esq")
const cardDir = document.querySelector(".card-dir")

function movimentaCards(scroll_pos) {
    Object.assign(cardEsq.style,{transform:`translate(${calculo(scroll_pos)}%)`});    
    Object.assign(cardDir.style,{transform:`translate(${-calculo(scroll_pos)}%)`});    
}

function calculo(eixoY){
    return 82 * (eixoY / window.innerHeight);
  }

//   function calculoOpac(eixoY){
//     console.log((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
//     return (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//   }

window.addEventListener('scroll', (e) => {
  posicaoScrollAtual = window.scrollY;
  if (!rolagem) {
    window.requestAnimationFrame(() => {
      movimentaCards(posicaoScrollAtual);
      rolagem = false;
    });
  }
  rolagem = true;
});

const efeitoMarola = document.getElementById("feTurb");
TweenMax.to(efeitoMarola, 20, {
    attr: {
        baseFrequency: `${0.04} ${0.1}`
    },
    repeat: -1,
    yoyo: true
})
