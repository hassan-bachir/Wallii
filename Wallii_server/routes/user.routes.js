const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

// (/user/) GET
router.get("/", checkToken, userController.readUserInfo);

// (/user/financial-summary) GET
router.get(
    "/financial-summary",
    checkToken,
    userController.getFinancialSummary
);

// (/user/) PUT
router.put("/", checkToken, userController.updateUser);

// (/user/goals) POST
router.post("/goals", checkToken, userController.addGoal);

// (/user/goals/:goalId) DELETE
router.delete("/goals/:goalId", checkToken, userController.deleteGoal);

// (/user/goals) GET
router.get("/goals", checkToken, userController.getAllGoals);

// (/user/goals/:goalId) GET
router.get("/goals/:goalId", checkToken, userController.getGoalById);

module.exports = router;
