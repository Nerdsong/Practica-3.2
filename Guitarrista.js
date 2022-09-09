const Guitarra = require("./Guitarra");

class Guitarrista{
    nombre = "nombre por default";
    estilo = "metal";
    guitarraEnUso = "ninguna";

    asinarNombreGuitarrista(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    agarraUnaGuitarra(guitarraAUsar){
        this.guitarraEnUso = guitarraAUsar;
    }

    tocarMuyFuerte(){
        this.guitarraEnUso.bajarVidaUtilCuerdas(30)
        if(this.guitarraEnUso.cuerdaRota == true){
            console.log(this.nombre, "rompió una cuerda de",this.guitarraEnUso.nombreGuitarra);
        }
    }

}

module.exports = Guitarrista;
