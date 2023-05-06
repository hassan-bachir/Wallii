const express = require("express");
const router = express.Router();
const aiAdvisorController = require("../controllers/aiAdvisorController");
const {
    authMiddleware: checkToken,
} = require("../middlewares/auth.middleware");

router.post("/", checkToken, aiAdvisorController.getAdvice);

module.exports = router;
