// login // register // logout // forgot password
const bcrypt = require("bcrypt");

const pool = require("../config/db.js");

const login = async (req, res)=>{

    const {email, password} = req.body || {};// destructuing email password: req.body.email, req.body.password | {} this for truthy value, otherwise undefined will crash


    if(!email || !password ){ // truthy falsy concept, handle multiple cases
        return res.status(400).json({
            message: "invalid credentials"
        });
    }
    
    const result = await pool.query(
        "SELECT * FROM USERS WHERE email = $1", 
        [email]
    ); // not directly email , instead $1 , $2 for prevention of sql injection

    res.json({
        message: "Login working",
        email: email
    });

};

const register = async (req,res)=>{

    const {name, email, password} = req.body || {};
    if(!name || !email || !password){
        return res.status(400).json({
            message:"All fields are required"
        });
    }

    const result = await pool.query(
        "SELECT * FROM USERS WHERE email = $1", [email]
    );

    if( result.rows.length > 0 ){
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword);

    res.json({
        message: "Successfully registered",
        name: name
    })
}


module.exports = {
    login,
    register
}


// JavaScript falsy values

// These are considered FALSE in conditions:

// Value	    Result

// ""	        false
// undefined	false
// null	        false
// 0	        false
// false	    false
// NaN	        false

// Everything else is mostly truthy.