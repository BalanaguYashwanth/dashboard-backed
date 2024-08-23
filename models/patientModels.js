const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true,
        unique: true,
        min: 10,
        max: 90
    },
    sex: {
        type: String,
        required: true,
        enum: ['M', 'F']

    },
    // condition: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'disease'
    // },
    processStatus: {
        type: Number,
        required: true,
        // 1 - pending or processing
        // 2 - successful
        // 3 - cancelled
        enum: [1, 2, 3] 
    },
    // files : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'file'
    // }
}, { timestamps: true });

const patient = mongoose.model('patient', patientSchema);

module.exports = patient;