class Cards {

  constructor(){
    // this.cardEsq = document.querySelector(".card-esq")
    // this.cardDir = document.querySelector(".card-dir")
  }
      
  // calculo(eixoY){
  //   return 82 * (eixoY / window.innerHeight);
  // }

  scrollCards() {
    let posicaoScrollAtual = 0;
    let posicaoInicial = 70
    let rolagem = false;
    posicaoScrollAtual = window.scrollY;
    if (!rolagem) {
      window.requestAnimationFrame(() => {
        this.cardEsq = document.querySelector(".card-esq")
        this.cardDir = document.querySelector(".card-dir")
        this.featCards = document.getElementsByTagName("article")

        Object.assign(this.cardEsq.style,{transform:`translate(${posicaoInicial * (posicaoScrollAtual / window.innerHeight)}%)`});    
        Object.assign(this.cardDir.style,{transform:`translate(${-(posicaoInicial * (posicaoScrollAtual / window.innerHeight))}%)`});    
        
        // Object.assign(this.cardEsq.style,{transform:`translate(${this.calculo(posicaoScrollAtual)}%)`});    
        // Object.assign(this.cardDir.style,{transform:`translate(${-this.calculo(posicaoScrollAtual)}%)`});    

        rolagem = false;
      });
      if (window.innerWidth <= 375){
        for (let feat of this.featCards){
          feat.classList.remove("card-esq", "card-dir")
        }
      }
    }
    rolagem = true;

  }
    
}

export { Cards }

