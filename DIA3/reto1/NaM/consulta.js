const mongoose = require("mongoose")
const Libro = require("./libro")
const Autor = require("./autor")
const libroSchema = require("./libro")

mongoose.connect("mongodb://localhost:27017/arboles", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})

// ============ check =================

function checkRespuesta(err, res) {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
		console.log("Guardado correctamente")
	}
}

// ====================== DATOS =========================

let coleccion = []
let libro = new Libro({ titulo: "El ojo del mundo", nPaginas: 300, autor:[] })
libro
	.save()
	.then((book) => {
		console.log("Libro añadido")
		coleccion.push(book._id)
		libro = new Libro({ titulo: "La vida maravillosa", nPaginas: 350, autor:[] })
		return libro.save()
	})
	.then((book) => {
		console.log("Libro añadido")
		coleccion.push(book._id)
		libro = new Libro({ titulo: "La rueda del tiempo", nPaginas: 400, autor:[] })
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
        		autor = new Autor({ nombre: "Pepito Perez", edad: 54, libro: coleccion[2] })
        		return autor.save()
        	})
	.then((autor) => {
		console.log("Autor añadido")
	})
	.catch((err) => {
		console.log(err)
	})

//============= FINDONE=================

// Autor.findOne({ nombre: "Pepito Perez" }, function (err, author) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		Libro.updateOne({ titulo: "El ojo del mundo" }, { autor: author._id }, checkRespuesta)
// 	}
// })

 // ==========================================================

 
Autor.findOne({ nombre: "Robert Jordan" }, function (err, author) {
	if (err) {
		console.log(err)
	} else {
		let arr
		Libro.findOne({ titulo: "El ojo del mundo" }, function (err, book) {
			if (err) {
				console.log(err)
			} else {
				arr = book.autor
				arr.push(author._id)
				console.log(arr)
				Libro.updateOne({ titulo: "El ojo del mundo" }, { autor: arr }, checkRespuesta)
			}
		})
	}
})

//======================FIND ====================


// Autor.findOne({ nombre: "Robert Jordan" })
// 	.populate("libro")
// 	.exec((err, autor) => {
// 		if (err) {
// 			console.log(err)
// 			process.exit(-1)
// 		} else {
// 			console.log(`Autor: ${autor.nombre} - Numero de Libros: ${autor.libro.length}`)
// 			console.log(`Su primer libro fue ${autor.libro[0].titulo}`)
// 		}
// 	})