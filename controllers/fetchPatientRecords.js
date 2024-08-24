const patient = require("../models/patientModels");

const fetchPatientRecords = async () => {
    try {
        const data = await patient.find().populate('condition').populate('files');
        return data || [];
    } catch (error) {
        throw error
    }
}

module.exports = {
    fetchPatientRecords
}