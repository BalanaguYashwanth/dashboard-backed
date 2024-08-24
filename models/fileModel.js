const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileUploadedDate: {
        type: String,
        required: true
    },
    files: [
        {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ]
})


const PatientFiles = mongoose.model('file', fileSchema);

module.exports = PatientFiles;