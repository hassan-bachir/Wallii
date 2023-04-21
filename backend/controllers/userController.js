const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const updateUser = async (req, res) => {
    try {
        const { userId } = req;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};
