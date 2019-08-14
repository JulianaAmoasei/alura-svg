class Cards {
    
    // const cardEsq = document.querySelector(".card-esq")
    // const cardDir = document.querySelector(".card-dir")
    
    movimentaCards(scroll_pos) {
        Object.assign(cardEsq.style,{transform:`translate(${calculo(scroll_pos)}%)`});    
        Object.assign(cardDir.style,{transform:`translate(${-calculo(scroll_pos)}%)`});    
    }
    
    calculo(eixoY){
        return 82 * (eixoY / window.innerHeight);
    }
    
    window.addEventListener('scroll', (e) => {
        let posicaoScrollAtual = 0;
        let rolagem = false;
      posicaoScrollAtual = window.scrollY;
      if (!rolagem) {
        window.requestAnimationFrame(() => {
          movimentaCards(posicaoScrollAtual);
          rolagem = false;
        });
      }
      rolagem = true;
    });
    
}

