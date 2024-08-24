const Patient = require("../models/patientModels");

const fetchPatientRecords = async () => {
    try {
        const data = await Patient.find().populate('condition').populate('files');
        return data || [];
    } catch (error) {
        throw error
    }
}

module.exports = {
    fetchPatientRecords
}