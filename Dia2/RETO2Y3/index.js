const mongoose = require("mongoose")
const User = require("./user")
const Photo = require("./photo")
mongoose.connect("mongodb://localhost:27017/Reto3", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})

let user = new User({
	login: "oficial1",
	password: 335544,
	name: "Enrique",
	role: "admin",
	dateOfBirth: "1912-12-02",
	comments: "Nuevo admin",
	verified: true,
	phone: 111222333444,
	address: "Calle Florida, 5",
	email: "admin1@gmail.com",
	follow: "Pepito",
})
let photo = new Photo({
	user: "oficial1",
	url: "https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg",
	title: "FotoPerfil",
	description: "Foto perfil principal",
})

user.save(checkRespuesta)
photo.save(checkRespuesta)

function checkRespuesta(err, res) {
	if (err) {
		console.log(err)
	} else {
		console.log(res)
		console.log("Guardado correctamente")
	}
}

//Functions
function subirPhoto(usuario, link, titulo, descripcion) {
	let newPhoto = {
		user: usuario,
		url: link,
		title: titulo,
		description: descripcion,
	}
	newPhoto.save(check)
}
//Get Photo
function getPhoto(usuario) {
	Photo.find({ user: usuario }, function (err, photo) {
		if (err) {
			console.log(err)
		} else {
			console.log(photo)
		}
	})
}
//Follow
//
function follow(userOrig, userDest) {
	User.updateOne({ login: userOrig }, { follow: userDest }, check)
}
//Unfollow
function unfollow(userOrig, userDest) {
	User.findOne({ login: userOrig }, function (err, user) {
		if (err) {
			console.log(err)
		} else if (user.follow == userDest) {
			User.updateOne({ login: user.login }, { follow: "" }, check)
		} else {
			console.log(user)
			console.log("No sigue a ese usuario")
		}
	})
}
//Delete photo

function deletePhoto(usuario, titulo) {
	Photo.deleteOne({ user: usuario, title: titulo }, function (err) {
		if (err) {
			console.log(err)
		} else {
			console.log("Foto eliminada")
		}
	})
}
deletePhoto("Maria", "FotoPerfil")

//Delete all

function deleteAll(usuario) {
	Photo.deleteMany({ user: usuario }, function (err, data) {
		if (err) {
			console.log(err)
		} else {
			console.log("Todas las fotos eliminadas")
			console.log(data)
		}
	})
}
deleteAll("Jaimito")