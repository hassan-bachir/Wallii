const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

//get user info
router.get("/", checkToken, userController.readUserInfo);
//update user info
router.put("/", checkToken, userController.updateUser);
//add goal
router.post("/goals", checkToken, userController.addGoal);

module.exports = router;
