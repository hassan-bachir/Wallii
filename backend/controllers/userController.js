const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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

module.exports = {
    updateUser,
    readUserInfo,
};
