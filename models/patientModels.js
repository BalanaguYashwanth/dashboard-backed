const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true,
        min: 10,
        max: 90
    },
    condition: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'disease'
    },
    files: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'file'
    },
    patientId: {
        type: Number,
        required: true,
        unique: true,
    },
    processStatus: {
        type: Number,
        required: true,
        enum: [1, 2, 3] // 1 - pending or processing, 2 - successful, 3 - cancelled
    },
    sex: {
        type: String,
        required: true,
        enum: ['M', 'F']
    },
}, { timestamps: true });

const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;