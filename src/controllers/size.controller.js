const Size = require('../models/size.model')

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const size = new Size({
        name: req.body.name,
    });

    size.save(size)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Size."
            });
        });
};

exports.findAll = (req, res) => {

    Size.find({})
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

    Size.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Size with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Size with id=" + id });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Size.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Size with id=${id}. Maybe Size was not found!`
                });
            } else res.send({ message: "Size was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Size with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Size.findByIdAndRemove(id)
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

exports.deleteMany = (req, res) => {

    ids = req.body.ids
    
    Size.deleteMany({_id:{$in:ids}})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Sizes were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all sizes."
            });
        });
};
