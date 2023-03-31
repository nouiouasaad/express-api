const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        unique: [true, "name already exists in database!"],
        trim: true,
        required: [true, "name not provided "],
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    type: {
        type: Number,
        required: [true, "Please specify store type"]
    },
    status: {
        type: Boolean,
        required: [true, "Please specify store status"]
    },
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model('Store', storeSchema);