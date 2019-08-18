class Cards {

  // constructor(){
  //   this.cardEsq = document.querySelector(".card-esq")
  //   this.cardDir = document.querySelector(".card-dir")
  // }
      
  // calculo(eixoY){
  //   return 82 * (eixoY / window.innerHeight);
  // }

  scrollCards() {
    let posicaoScrollAtual = 0;
    let rolagem = false;
    posicaoScrollAtual = window.scrollY;
    if (!rolagem) {
      window.requestAnimationFrame(() => {
        this.cardEsq = document.querySelector(".card-esq")
        this.cardDir = document.querySelector(".card-dir")

        Object.assign(this.cardEsq.style,{transform:`translate(${70 * (posicaoScrollAtual / window.innerHeight)}%)`});    
        Object.assign(this.cardDir.style,{transform:`translate(${-(70 * (posicaoScrollAtual / window.innerHeight))}%)`});    
        
        // Object.assign(this.cardEsq.style,{transform:`translate(${this.calculo(posicaoScrollAtual)}%)`});    
        // Object.assign(this.cardDir.style,{transform:`translate(${-this.calculo(posicaoScrollAtual)}%)`});    

        rolagem = false;
      });
    }
    rolagem = true;
  }
    
}

export { Cards }

