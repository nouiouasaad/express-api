const Category = require('./category.model');

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        unique: [true, "name already exists in database!"],
        trim: true,
        required: [true, "name not provided "],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "ProductCategory"
    },
    status: {
        type: Boolean,
        required: [true, "Please specify store status"]
    },
    description: {
        type: String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model('Product', productSchema);