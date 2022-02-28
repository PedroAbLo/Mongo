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
module.exports = mongoose.model("user", UserSchema)