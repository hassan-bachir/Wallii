exports.adminMiddleware = async (req, res, next) => {
    // req.user.role ["user", "admin"]
    if (req.user.role === "admin") return next();

    return res.status(401).json({ message: "Unauthorized" });
};
