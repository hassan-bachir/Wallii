const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

router.get("/user", checkToken, userController.readUserInfo);
router.put("/user", checkToken, userController.updateUser);

module.exports = router;
