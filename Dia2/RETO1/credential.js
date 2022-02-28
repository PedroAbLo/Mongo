const mongoose = require("mongoose")

let CredentialsSchema = new mongoose.Schema({
	address: { type: String, select: true },
	phone: Number,
	email: String,
})
CredentialsSchema.pre("save", function (next) {
	if (this.phone.length < 9) {
		console.log("Número de teléfono incorrecto")
	} else {
		console.log("Número de teléfono correcto")
		next()
	}
})
CredentialsSchema.pre("save", function (next) {
	if (this.email.includes("@gmail.com") || this.email.includes("@gmail.es")) {
		console.log("email correct")
		next()
	} else {
		console.log("email incorrecto")
	}
})
module.exports = mongoose.model("credentials", CredentialsSchema, "credentials")