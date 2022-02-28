let mongoose = require("mongoose")
let User = require("./user")
let Profile = require("./profile")
let Credentials = require("./credential")

mongoose.connect("mongodb://localhost:27017/Reto3", {
	useNewUrlParser: false,
	useUnifiedTopology: false,
})

let profile = new Profile({
	name: "Ariadna",
	role: "oficial",
	dateOfBirth: "1990-02-11",
	verified: true,
	comments: "Nuevo oficial",
})
profile.save(checkRespuesta)
let user = new User({
	login: "oficialAriadna",
	password: "oficial1",
})
user.save(checkRespuesta)
let credentials = new Credentials({
	address: "Calle Mayor, 50",
	phone: 111122222333,
	email: "oficial1@gmail.com",
})
credentials.save(checkRespuesta)

function checkRespuesta(err, res) 
{
    if (err) 
        console.log("Error: " + err)
    else 
    {
        console.log("Metodo realizado correctamente")
        console.log(res);
        // mongoose.disconnect();
    }
}