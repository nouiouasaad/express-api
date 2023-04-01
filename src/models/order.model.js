const User = require('./user.model');

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderNumber: {
        type: Number,
        default: 0,
    },
    address: {
        type: String,
        required: false,
    },
    products: {
        type: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: "Product"
                },

                number: {
                    type: Number
                }
            }
        ],
        required: true,
    },
    status: {
        type: Number,
        enum: [0, 1, 2, 3, 4],
        required: [true, "Please specify order Status"]
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

orderSchema.pre('save', function (next) {

    this.orderNumber = this.orderNumber + 1;

    next();
});

module.exports = mongoose.model('Order', orderSchema);