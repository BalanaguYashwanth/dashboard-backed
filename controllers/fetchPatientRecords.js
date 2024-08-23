const http = require('http');
const { Server } = require("socket.io");
const patient = require("../models/patientModels")

const fetchPatientRecords = async () => {
    try {
        const data = await patient.find();
        return data || [];
    } catch (error) {
        throw error
    }
}

module.exports = {
    fetchPatientRecords
}