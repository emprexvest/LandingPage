const mongoose = required('mongoose');


const articleSchema = new mongoose.Schema({
    article: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Article', articleSchema);