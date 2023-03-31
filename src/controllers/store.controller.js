const Store = require('../models/store.model')

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const store = new Store({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        type: req.body.type,
        status: req.body.status ? req.body.status : true
    });

    store.save(store)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Store."
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Store.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Store.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Store with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Store with id=" + id });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Store.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Store with id=${id}. Maybe Store was not found!`
                });
            } else res.send({ message: "Store was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Store with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Store.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Store.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Stores were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all stores."
            });
        });
};

exports.findAllOpned = (req, res) => {
    Store.find({ status: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving stores."
            });
        });
};
