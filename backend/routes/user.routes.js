const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

router.get("/", checkToken, userController.readUserInfo);
router.put("/", checkToken, userController.updateUser);
router.post("/goals", checkToken, userController.addGoal);

module.exports = router;
