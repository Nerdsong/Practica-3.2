const Guitarra = require("./Guitarra");
const Guitarrista = require("./Guitarrista")

const guitarra1 = new Guitarra()
const fulano = new Guitarrista()


console.log("El guitarrista se llama", fulano.nombre)
console.log("Está usando", fulano.guitarraEnUso)

guitarra1.asignarNuevoNombreGuitarra("guitarra1");
fulano.asinarNombreGuitarrista("fulano");
fulano.agarraUnaGuitarra(guitarra1)

console.log("El guitarrista se llama", fulano.nombre)
console.log("Está Usando", fulano.guitarraEnUso)

fulano.tocarMuyFuerte()
fulano.tocarMuyFuerte()
fulano.tocarMuyFuerte()