class Figuras {

    constructor(){
        this.listaFiguras = document.querySelectorAll(".figura")
    }

    figuras(){
        TweenMax.to(this.listaFiguras, 0.5, {
            scale: 0.95, 
            repeat: -1, 
            yoyo: true
        })    
    }
}

export { Figuras }