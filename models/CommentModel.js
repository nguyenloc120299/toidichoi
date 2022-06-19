const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    tag: Object,
    reply: mongoose.Types.ObjectId,
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
    reviewId: mongoose.Types.ObjectId,
    reviewUserId: mongoose.Types.ObjectId
}, {
    timestamps: true
})

module.exports = mongoose.model('comment', commentSchema)