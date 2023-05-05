const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const Transaction = require("../models/transactionModel");

const getFinancialSummary = async (req, res) => {
    try {
        const userId = req.userId;

        const user = await User.findById(userId).populate("wallets");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const walletIds = user.wallets.map((wallet) => wallet._id);

        const transactions = await Transaction.find({
            walletId: { $in: walletIds },
        });
        let totalIncome = 0;
        let totalExpenses = 0;

        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            } else {
                totalExpenses += transaction.amount;
            }
        });

        const difference = totalIncome - totalExpenses;

        res.json({ totalIncome, totalExpenses, difference });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
const updateUser = async (req, res) => {
    try {
        const { userId } = req;
        const userData = req.body;

        if (userData.password) {
            userData.password = await bcrypt.hash(userData.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(userId, userData, {
            new: true,
        }).select("-password -wallets -_id");
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};
const readUserInfo = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId, "-password -wallets -_id");
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user info", error });
    }
};
const addGoal = async (req, res) => {
    try {
        const { userId } = req;
        const {
            description,
            targetAmount,
            targetDate: targetDateString,
        } = req.body;
        const targetDate = new Date(targetDateString);

        const goal = { description, targetAmount, targetDate };

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { goals: goal } },
            { new: true }
        );

        res.status(200).json({
            message: "Goal added successfully",
            updatedUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Error adding goal", error });
    }
};

const getAllGoals = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId).select("goals");
        res.status(200).json(user.goals);
    } catch (error) {
        res.status(500).json({ message: "Error fetching goals", error });
    }
};

const getGoalById = async (req, res) => {
    try {
        const { userId } = req;
        const { goalId } = req.params;

        const user = await User.findById(userId).select("goals");
        const goal = user.goals.find((goal) => goal._id.toString() === goalId);

        if (!goal) {
            res.status(404).json({ message: "Goal not found" });
            return;
        }

        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ message: "Error fetching goal", error });
    }
};
const deleteGoal = async (req, res) => {
    try {
        const { userId } = req.user;
        const { goalId } = req.params;

        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const goalIndex = user.goals.findIndex(
            (goal) => goal._id.toString() === goalId
        );
        if (goalIndex === -1) {
            res.status(404).json({ message: "Goal not found" });
            return;
        }

        user.goals.splice(goalIndex, 1);
        await user.save();

        res.status(200).json({ message: "Goal deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting goal", error });
    }
};

module.exports = {
    updateUser,
    readUserInfo,
    addGoal,
    deleteGoal,
    getFinancialSummary,
    getAllGoals,
    getGoalById,
};
