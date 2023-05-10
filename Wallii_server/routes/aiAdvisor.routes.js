const express = require("express");
const router = express.Router();
const aiAdvisorController = require("../controllers/aiAdvisorController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

// (/ai/) POST
router.post("/", checkToken, aiAdvisorController.getAdvice);

module.exports = router;
