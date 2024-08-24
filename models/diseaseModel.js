const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Disease = mongoose.model('disease', diseaseSchema);

module.exports = Disease;