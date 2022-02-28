const mongoose = require("mongoose")

let UserSchema = new mongoose.Schema({
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
})

UserSchema.pre("save", function (next) {
	if (this.password === "contraseña") {
		console.log("Contraseña incorrecta")
	} else {
		console.log("Datos correctos")
		next()
	}
})

module.exports = mongoose.model("users", UserSchema, "users")