const mongoose = require("mongoose")
const Libro = require("./libro")
const Autor = require("./autor")

mongoose.connect("mongodb://localhost:27017/arboles", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})
//
function checkRespuesta(err, res) {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
		console.log("Guardado correctamente")
	}
}

//Create
let libro = new Libro({ titulo: "La maravilla del mundo", nPaginas: 550 })
libro.save(function (err, res) {
	if (err) {
		console.log(err)
	} else {
		let autor = new Autor({ nombre: "Pepito Juarez Velez", edad: 55, libro: res.id })
		autor.save(checkRespuesta)
	}
})
//Find
Autor.findOne({ nombre: "Pepito Juarez Velez" })
	.populate("libro")
	.exec((err, autor) => {
		if (err) {
			console.log(err)
			process.exit(-1)
		} else {
			console.log(`Autor: ${autor.nombre} Libro: ${autor.libro.titulo}`)
			console.log(autor)
		}
	})