const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const typeSchema = new Schema({
    name: {
        type: String,
        unique: [true, "name already exists in database!"],
        trim: true,
        required: [true, "name not provided "],
    },
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model('StoreType', typeSchema);