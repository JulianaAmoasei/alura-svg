class Marola {

    constructor (){
        this.efeitoMarola = document.getElementById("feTurb")
    }

    marola(){
        TweenMax.to(this.efeitoMarola, 20, {
            attr: {
                baseFrequency: `${0.04} ${0.1}`
            },
            repeat: -1,
            yoyo: true
        })
    }
}

export { Marola }