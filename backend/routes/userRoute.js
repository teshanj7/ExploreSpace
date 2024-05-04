const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    updateUser,
    deleteUser,
    viewUserDetails
} = require("../controllers/userController");

// Get all the users
router.get("/", getAllUsers)

// Update a user
router.put("/update/:id", updateUser)

// Delete a single user 
router.delete("/delete/:id", deleteUser)

// Get details of a single user
router.get("/get/:id", viewUserDetails)

module.exports = router;