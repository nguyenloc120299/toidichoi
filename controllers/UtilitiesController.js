const Category = require('../models/Utilities')

const categoryController = {
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createCategory: async (req, res) => {
        try {
            const { name, icon } = req.body;
            const category = await Category.findOne({ name })
            if (category) return res.status(400).json({ msg: "Thể loại đã tồn tại" })

            const newCategory = new Category({ name, icon })

            await newCategory.save()
            res.json({ msg: "Created a category" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { name, image } = req.body;
            await Category.findOneAndUpdate({ _id: req.params.id }, { name, icon })

            res.json({ msg: "Updated a category" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = categoryController