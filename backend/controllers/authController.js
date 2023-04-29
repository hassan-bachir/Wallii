const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
    );
};

const register = async (req, res) => {
    try {
        const { name, lastName, email, password, aiAdvisorName } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            lastName,
            email,
            password: hashedPassword,
            aiAdvisorName,
        });

        await newUser.save();

        const token = generateToken(newUser);

        res.status(201).json({
            message: "User registered successfully",
            newUser,
            token,
        });
    } catch (error) {
        console.error("Server error:", error); // Added for debugging, might delete later :')
        res.status(500).json({ message: "Server error", error });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        const token = generateToken(user);

        res.status(200).json({
            message: "Logged in successfully",
            user,
            token,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = {
    register,
    login,
};
