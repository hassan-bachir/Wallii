const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
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
        res.status(500).json({ message: "Server error", error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "Invalid Credentials" });

    const isMatched = user.matchPassword(password);
    if (!isMatched)
        return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.SECRET_KEY
    );

    res.json({ token });
};
