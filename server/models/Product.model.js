import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    club: {
        type: String
    }
})

var Product = mongoose.model('Product', ProductSchema);

export default Product;