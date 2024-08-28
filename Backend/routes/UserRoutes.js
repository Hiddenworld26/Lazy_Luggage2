const {registerUser,authUser,updateUserProfile,logoutUser,forgotPassword,resetPassword} = require('../controllers/UserController')

const express = require('express');


const router= express.Router();

const {protect} = require("../middleware/authMiddleware");

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.put("/profile", protect, updateUserProfile);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.route("/logout").post(logoutUser);

module.exports=router;