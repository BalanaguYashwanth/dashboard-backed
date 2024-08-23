const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const disease = mongoose.model('disease', diseaseSchema);

module.exports = disease;