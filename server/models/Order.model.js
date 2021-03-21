import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({


        firstname: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        zip_code: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        createdAt: {
            type: Date,
            default: new Date(),
        }
   
})

var Order = mongoose.model('Order', OrderSchema);

export default Order;