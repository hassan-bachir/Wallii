const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "30d" } // Change this value to set a longer expiration time, e.g., '30d' for 30 days
    );
};
exports.register = async (req, res) => {
    const { email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser)
        return res.status(409).json({ message: "Email already exists" });

    const user = new User();
    user.email = email;
    user.password = password;

    if (role) user.role = role;
    await user.save();
    const { password: hashedPassword, ...newUser } = user.toJSON();
    res.status(201).json(newUser);
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
