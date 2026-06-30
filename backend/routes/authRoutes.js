const express = require("express");
const router = express.Router();
const {login, register} = require("../controllers/authController"); //destructuring

router.post("/login",login);
router.post("/register", register);

module.exports = router


// Export Directly
// → importing is simpler.

// Export as Object
// module.exports = { router }
// → importing requires destructuring.


// Frontend Request
//        ↓
// server.js checks base path
//        ↓
// Sends request to correct router
//        ↓
// Router checks endpoint
//        ↓
// Controller logic runs
//        ↓
// Response sent