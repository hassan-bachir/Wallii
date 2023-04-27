const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

//get user info
// (/user/) GET
router.get("/", checkToken, userController.readUserInfo);

//update user info
// (/user/) PUT
router.put("/", checkToken, userController.updateUser);

//add goal
// (/user/goals) POST
router.post("/goals", checkToken, userController.addGoal);

// Delete goal
// (/user/goals/:goalId) DELETE
router.delete("/goals/:goalId", checkToken, userController.deleteGoal);

module.exports = router;
