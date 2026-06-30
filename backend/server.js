const express = require("express");
const app = express(); // without brackets only reference is stored , with brackets execution works
const pool = require("./config/db.js");
const authRoutes = require('./routes/authRoutes')

app.use(express.json()); // express.json() is middleware, incoming JSON request body is converted into JavaScript object

app.use("/api/auth", authRoutes); //Middleware should usually come BEFORE routes. Reason: Routes may need parsed body data.

app.get("/",(req, res) =>{  // req, res are parameters inside callback functions
    res.json({message:"Get route working"});
});

app.post("/",(req,res)=>{
    res.json(req.body); // without middleware req.body is undefined , req.body: data from request body
});

app.get("/users/:id",(req,res)=>{
    console.log(req.params.id); //req.params is an OBJECT that stores all dynamic values from URL
    res.json({
        userId: req.params.id // req.params stores ALL route parameters.
    });
});

const PORT = 5000;
app.listen(PORT,()=>{      // used port number, callback function , no parameter
   console.log("Server running");
});

// get post is with respect to frontend 
// get , frontend will get data from backend 
// post , frontend posts data to backend
// PUT = frontend sends modified data to backend for updating existing data
// DELETE → frontend asks backend to remove data


// Frontend talks using request.
// Backend replies using response.

//req.params Data from URL


