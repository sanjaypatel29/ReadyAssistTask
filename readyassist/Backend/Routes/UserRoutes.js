const express = require("express");
const { postUserData, getAllUsers, editUser, deleteUser, userDataId } = require("../Controllers/userControllers")
const router = express.Router();

router.post("/api/postuser", postUserData)

router.get("/api/getallusers", getAllUsers)

router.post("/user/edit/:id", editUser)

router.post("/user/delete/:id", deleteUser)
router.get("/userdataid", userDataId)

module.exports = router