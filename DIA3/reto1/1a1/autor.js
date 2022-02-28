const mongoose = require("mongoose")

const AutorSchema = new mongoose.Schema({
	nombre: String,
	edad: Number,
	libro: { type: mongoose.Schema.Types.ObjectId, ref: "libro" },
})
module.exports = mongoose.model("autor", AutorSchema, "autor")