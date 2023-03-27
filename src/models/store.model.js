const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        unique: [true, "name already exists in database!"],
        trim: true,
        required: [true, "name not provided "],
    },
    description: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        enum: ["open", "closed"],
        required: [true, "Please specify store status"]
    },
},
    {
        timestamps: {
            createdAt: 'created_at', // Use `created_at` to store the created date
            updatedAt: 'updated_at' // and `updated_at` to store the last updated date
        }
    }
);

module.exports = mongoose.model('Store', storeSchema);