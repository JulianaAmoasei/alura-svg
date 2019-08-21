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
    console.log(innerWidth)
    let posicaoInicialEsq = this.cardEsq.offsetLeft - 100
    let posicaoInicialDir = this.cardDir.offsetLeft + 100
    let posicaoScrollAtual = window.scrollY;

    Object.assign(this.cardEsq.style,{transform:`translate(${posicaoInicialEsq * (posicaoScrollAtual / window.innerHeight)}%)`});    
    Object.assign(this.cardDir.style,{transform:`translate(${-(posicaoInicialDir * (posicaoScrollAtual / window.innerHeight))}%)`});
  }
    
}

export { Cards }

