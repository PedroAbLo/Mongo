const mongoose = require("mongoose")
const Libro = require("./libro")
const Autor = require("./autor")

mongoose.connect("mongodb://localhost:27017/arboles", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})

function checkRespuesta(err, res) {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
		console.log("Guardado correctamente")
	}
}

let coleccion = []
let libro = new Libro({ titulo: "El ojo del mundo", nPaginas: 300 })
libro
	.save()
	.then((book) => {
		console.log("Libro añadido")
		coleccion.push(book._id)
		libro = new Libro({ titulo: "La vida maravillosa", nPaginas: 350 })
		return libro.save()
	})
	.then((book) => {
		console.log("Libro añadido")
		coleccion.push(book._id)
		libro = new Libro({ titulo: "La rueda del tiempo", nPaginas: 400 })
		return libro.save()
	})
	.then((book) => {
		console.log("Libro añadido")
		coleccion.push(book._id)
		let autor = new Autor({ nombre: "Robert Jordan", edad: 60, libro: coleccion })
		return autor.save()
	})
	.then((autor) => {
		console.log("Autor añadido")
	})
	.catch((err) => {
		console.log(err)
	})

// ===================== Find ================================


Autor.findOne({ nombre: "Robert Jordan" })
	.populate("libro")
	.exec((err, autor) => {
		if (err) {
			console.log(err)
			process.exit(-1)
		} else {
			console.log(`Autor: ${autor.nombre} - Numero de Libros: ${autor.libro.length}`)
			console.log(`Su primer libro fue ${autor.libro[0].titulo}`)
		}
	})