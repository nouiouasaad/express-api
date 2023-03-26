const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

exports.signup = (req, res) => {
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    user.save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user)
            res.status(404).send({ message: "Not found user with email " + req.body.email });
            
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
                );
                
                if (!passwordIsValid) {
                    return res.status(401)
                    .send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }
                
                var token = jwt.sign({
                    id: user.id
                }, process.env.API_SECRET, {
                    expiresIn: 86400
                });
                
            res.status(200)
                .send({
                    user: {
                        id: user._id,
                        email: user.email,
                        fullName: user.fullName,
                    },
                    message: "Login successfull",
                    accessToken: token,
                });
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving user " + err });
        });
};