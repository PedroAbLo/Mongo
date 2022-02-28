const mongoose = require("mongoose")
const userSchema = require("./user")

let ProfileSchema = new mongoose.Schema({
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
})

ProfileSchema.pre("save", function (next) {
	if (this.verified == false) {
		console.log("No está verificado")
	} else {
		console.log("Nuevo perfil creado")
		next()
	}
})

module.exports = mongoose.model("profile", ProfileSchema, "profile")