const Guitarrista = require("./Guitarrista")

class Guitarra{
    color = "Rojo";
    vidaUtilCuerdas = 100;
    cuerdaRota = false;
    sonido = "Limpio";
    nombreGuitarra = "ninguno";

    bajarVidaUtilCuerdas(daño){
        this.vidaUtilCuerdas = this.vidaUtilCuerdas - daño;
        if (this.vidaUtilCuerdas < 30){
            this.cuerdaRota = true
        }
    }

    asignarNuevoNombreGuitarra(nuevoNombre){
        this.nombreGuitarra = nuevoNombre;
    }


    cambiarSonido(nuevoSonido){
        this.sonido = nuevoSonido
    }

    queColorEs(){
        return this.color;
    }
    
    cambiarColor(nuevoColor){
        this.color = nuevoColor;
    }
}

module.exports = Guitarra;