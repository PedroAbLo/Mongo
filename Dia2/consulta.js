let mongoose = require("mongoose");
let User = require("./userMDB");

mongoose.connect('mongodb://localhost:27017/codenotch', 
                {useNewUrlParser: true, useUnifiedTopology: true} ) 

let data = {
    name: "Juanito",
    email: "mipepaemail@gmail.com",
    password: "1234567",
    role: "user",
    verified: true,
    };

// let document = new User(data);

// document.save()
//     .then(function(res)
//     {
//         console.log("Documento guardado correctamente desde promesa"); 
//         console.log(res) 
//         mongoose.disconnect();
//     })
//     .catch(function(){console.log("Error al escribir el documento")})


//document.save(checkRespuesta);

// User.create(data, checkRespuesta);

//User.insertMany([data, data], checkRespuesta);

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

// User.create(data)
//     .then(function(resp)
//     {
//         console.log("Documento guardado correctamente")
//         console.log(resp)
//         mongoose.disconnect();
//     })
//     .catch(function()
//     {
//         console.log("Error al escribir el documento")
//     })

// User.insertMany([data, data])
//     .then(function(resp)
//     {
//         console.log("Documentos guardado correctamente")
//         console.log(resp)
//         mongoose.disconnect();
//     })
//     .catch(function()
//     {
//         console.log("Error al escribir el documento")
//     })

// User.find({name: "Juanito"}, 
//         function(err, user)
//         {
//             if (err)
//                 console.log("Error");
//             else
//             {
//                 console.log(user);
//                 console.log(user[0].name)
//                 console.log(user[0].email)
//             }
//         })



// User.findOne({name: "Juanito"}) 
//         .then (function(items)
//         {
//             console.log(items)
//             mongoose.disconnect();
//         })
//         .catch(function()
//         {
//             console.log("Error")
//         })

// User.find({}).where("age").gt(20)
//         .then (function(items)
//         {
//             console.log(items)
//             mongoose.disconnect();
//         })
//         .catch(function()
//         {
//             console.log("Error")
//         })

// User.findById("6188f3385fe62004d7734ca6")
//         .then (function(items)
//         {
//             console.log(items)
//             mongoose.disconnect();
//         })
//         .catch(function()
//         {
//             console.log("Error")
//         })


// User.findOne({name: "Juanito"}, 
//         function(err, user)
//         {
//             if (err)
//                 console.log("Error");
//             else
//                 console.log(user);
//         })

/*User.find({}).where("age").gt(20).exec
        (
            function(err, user)
            {
                if (err)
                    console.log("Error");
                else
                    console.log(user);
            }
        )
*/
/*User.findById("5faaa66d6b8e8b0e387f9b43",
            function(err, user)
            {
                if (err)
                    console.log("Error");
                else
                {
                    console.log(user);
                    console.log(user.name);
                    console.log(user.role);
                }
            })*/

// User.find({name: "Pepa"}).exec() 
//             .then (function(items)
//             {
//                 console.log(items)
//                 mongoose.disconnect();
//             })
//             .catch(function()
//             {
//                 console.log("Error")
//             })



// User.findOne({name: "Pepa"}).exec() 
//         .then (function(items)
//         {
//             console.log(items)
//             mongoose.disconnect();
//         })
//         .catch(function()
//         {
//             console.log("Error")
//         })

// User.find({}).where("age").gt(20).exec() 
//         .then (function(items)
//         {
//             console.log(items)
//             mongoose.disconnect();
//         })
//         .catch(function()
//         {
//             console.log("Error")
//         })

// User.findById("602b9eaf2a7cde079055241d").exec() 
//         .then (function(items)
//         {
//             console.log(items)
//             mongoose.disconnect();
//         })
//         .catch(function()
//         {
//             console.log("Error")
//         })


// User.deleteOne({name : "Juanito"})
//     .then(function(items)
//     {
//         console.log("Correctamente Borrado");
//         console.log(items);
//         mongoose.disconnect();
        
//     })
//     .catch(function()
//     {
//         console.log("Error")
//     })

// User.deleteMany({name : "Juanito"})
//     .then(function(items)
//     {
//         console.log("Correctamente Borrado");
//         console.log(items)
//         mongoose.disconnect();
        
//     })
//     .catch(function()
//     {
//         console.log("Error")
//     })



/*User.deleteOne({name : "Pepa"}, 
    function(err,resp)
    {
        if (err)
            console.log("Error");
        else
        {
            console.log("Correctamente Borrado");
            console.log(resp);
            mongoose.disconnect();
        }
    })*/

/*User.deleteMany({name : "Juana"}, 
    function(err, datos)
    {
        if (err)
            console.log("Error");
        else
        {
            console.log("Correctamente Borrado");
            console.log(datos)
            mongoose.disconnect();
        }
    })*/

//User.updateOne({name : "Juana"}, {role: "user", verified : true}, checkRespuesta)
//User.updateMany({name : "Juana"}, {name: "Pepe", role: "user", verified : true}, checkRespuesta)


//User.findByIdAndUpdate("6188f3385fe62004d7734ca6", {name : "Pepa"}, checkRespuesta);
//User.findOneAndUpdate({name: "Pepe"}, {name : "Juana"}, checkRespuesta);

//User.findByIdAndDelete("6188f3385fe62004d7734ca6", checkRespuesta);
//User.findOneAndDelete({name: "Pepe"}, checkRespuesta);


