const express = require("express")
const verifyToken = require('../middlewares/auth.middleware')
const { signup, signin } = require("../controllers/auth.controller.js");

const router = express.Router()

router.post("/register", signup);

router.post("/login", signin);

router.get("/hiddencontent", verifyToken, function (req, res) {
    if (!user) {
        res.status(403)
            .send({
                message: "Invalid JWT token"
            });
    }
    if (req.user == "admin") {
        res.status(200)
            .send({
                message: "Congratulations! but there is no hidden content"
            });
    } else {
        res.status(403)
            .send({
                message: "Unauthorised access"
            });
    }
});

module.exports = router;