class Cards {

  constructor(){
    this.cardEsq = document.querySelector(".card-esq")
    this.cardDir = document.querySelector(".card-dir")
  }

  
      
  scrollCards() {
      window.requestAnimationFrame(this.calculoScroll.bind(this));
      // if (window.innerWidth <= 375){
      //   for (let feat of this.featCards){
      //     feat.classList.remove("card-esq", "card-dir")
      //   }
      // }
  }
  
  calculoScroll() {
    const pos = document.getElementsByClassName("section-dicas")[0].getBoundingClientRect()['y']
    console.log(pos)
    if (pos >= -30){
      // Object.assign(this.cardEsq.style,{transform:`translate(${-(pos + 30)/6}%)`});    
      // Object.assign(this.cardDir.style,{transform:`translate(${ (pos + 30)/6}%)`});
      this.cardEsq.style.transform = `translate(${-(pos + 30)/6}%)`;
      this.cardDir.style.transform = `translate(${(pos + 30)/6}%)`;

      // Object.assign(this.cardEsq.style,{transform:`rotateY(${-(pos + 30)/2}deg)`});    
      // Object.assign(this.cardDir.style,{transform:`rotateY(${ (pos + 30)/2}deg)`});
    }  
  }   
}

export { Cards }

