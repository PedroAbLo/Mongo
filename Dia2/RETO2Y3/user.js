const mongoose = require("mongoose")

let UserSchema = new mongoose.Schema({

	//USER

	login: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
		select: true,
		validate: [
			function (password) {
				return password.length >= 4
			},
			"Password demasiado corto",
		],
	},

	//PROFILE
    
	name: {
		type: String,
		validate: [
			function (name) {
				return name.length < 15
			},
			"Nombre exageradamente largo",
		],
	},

	role: {
		type: String,
		enum: ["admin", "oficial", "miembro"],
	},
	dateOfBirth: Date,
	comments: String,
	verified: Boolean,

	//CREDENTIAL

	address: { type: String, select: true },
	phone: Number,
	email: String,
	follow: String,
})

UserSchema.pre("save", function (next) {
	if (this.password === "contraseña") {
		console.log("Contraseña incorrecta")
	} else {
		console.log("Datos correctos")
		next()
	}
})

UserSchema.pre("save", function (next) {
	if (this.verified == false) {
		console.log("No está verificado")
	} else {
		console.log("Nuevo perfil creado")
		next()
	}
})

UserSchema.pre("save", function (next) {
	if (this.email.includes("@gmail.com") || this.email.includes("@gmail.es")) {
		console.log("email correct")
		next()
	} else {
		console.log("email incorrecto")
	}
})


module.exports = mongoose.model("user", UserSchema, "user")