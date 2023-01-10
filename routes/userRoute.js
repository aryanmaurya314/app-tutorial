const express = require("express");
const getUser = require("../controllers/getUser");

const router = express.Router();

// http://localhost:4000/users/
router.get("/", getUser);

// http://localhost:4000/users/add-user
// router.post("/add-user", "add user logic");


module.exports = router;