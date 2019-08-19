class Cards {

  constructor(){
    this.cardEsq = document.querySelector(".card-esq")
    this.cardDir = document.querySelector(".card-dir")
  }
      
  scrollCards() {
      window.requestAnimationFrame(this.calculoScroll.bind(this));
      if (window.innerWidth <= 375){
        for (let feat of this.featCards){
          feat.classList.remove("card-esq", "card-dir")
        }
      }
  }
  
  calculoScroll() {
    // this.featCards = document.getElementsByTagName("article")
    let posicaoInicial = 70
    let posicaoScrollAtual = window.scrollY;

    Object.assign(this.cardEsq.style,{transform:`translate(${posicaoInicial * (posicaoScrollAtual / window.innerHeight)}%)`});    
    Object.assign(this.cardDir.style,{transform:`translate(${-(posicaoInicial * (posicaoScrollAtual / window.innerHeight))}%)`});
  }
    
}

export { Cards }

