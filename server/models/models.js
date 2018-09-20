const mongoose = require('./mongoose');
ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "*Title required"],
        minlength: [3, "Must be a least 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "*Price is required"],
    },
    imageUrl: {
        type: String,
        required: [true, "*ImageUrl is required"]
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema);

// const uniqueValidator = require('mongoose-unique-validator');
// ProductSchema.plugin(uniqueValidator, { message: "Product already exists in the system" });

