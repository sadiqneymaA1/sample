// const express = require('express');

// const app = express();

// app.get("/",  (res, req) =>
// {

//     console.log("Listening on prot 3000")


// });

// app.listen(3000, () =>{
//     console.log("This is listening on port 3000")
// })







// const express = require('express');

// const app = express();

// app.get("/",(res, req) =>{
//     console.log("This working")
// });


// app.listen(3000,()=>{
//     console.log("This is working on this port")
// })




// const express = require("express");

// const app = express();

// app.get("/", (res, req)=>{
//     console.log('This is working on app Sadiq')
// });


// app.listen(3000, ()=>{
//     console.log("This is it")
// })


const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user");
require("dotenv/config");


const app = express();

// const customMiddleware = (req, res,next)=>{
//     console.log("Welcome to middleware");
//     next()
// }

// app.use(customMiddleware);

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Sadiq is the f done");

});

app.get("/user", (req,res)=>{

    let boy = ["boy","cow"];
    res.send(boy);

});

app.post("/create-user", async(req,res)=> {
try{
    const myUser = new User(req.body);
    await myUser.save()

    res.send(myUser);
}catch(err){
    res.send({message:err});
}
    
    
});

mongoose.connect(process.env.DB_CONNECTION_STRING,
{useUnifiedTopology:true, useNewUrlParser: true},

(req,res)=> {
    console.log("Connected to the database");
});

app.listen(3000, ()=>{
    console.log('Boy is here')
});