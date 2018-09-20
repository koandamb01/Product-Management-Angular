const Product = require('../models/models');

module.exports = {
    all: (req, res) => {
        Product.find({}).sort({ updatedAt: -1 })
            .then(
                data => res.json({ status: true, products: data })
            )
            .catch(
                error => res.json({ status: false, messages: error })
            )
    },

    getOne: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(
                data => res.json({ status: true, product: data })
            )
            .catch(
                error => res.json({ status: false, message: error })
            )
    },

    create: (req, res) => {
        Product.create(req.body)
            .then(
                data => res.json({ status: true, messages: { success: "Product successfully added!" }, product: data })
            )
            .catch(
                err => {
                    if (err) {
                        let messages = {}
                        for (let key in err.errors) {
                            messages[key] = err.errors[key].message;
                        }
                        res.json({ status: false, messages: messages });
                    }
                }
            )
    },

    update: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, context: 'query' })
            .then(
                data => res.json({ status: true, messages: { success: "Product successfully Updated!" }, product: data })
            )
            .catch(
                err => {
                    if (err) {
                        let messages = {}
                        for (let key in err.errors) {
                            messages[key] = err.errors[key].message;
                        }
                        res.json({ status: false, messages: messages });
                    }
                }
            )
    },


    delete: (req, res) => {
        Product.findByIdAndRemove({ _id: req.params.id })
            .then(
                data => res.json({ status: true, messages: { success: "Product successfully Delete!" }, product: data })
            )
            .catch(
                error => req.json({ status: false, messages: error })
            )
    }
}