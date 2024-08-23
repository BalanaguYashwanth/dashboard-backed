const express = require("express");
const { fetchPatientRecords } = require("../controllers/fetchPatientRecords");

const router = express.Router();

router.get('/fetchPatientRecords', async (req, res) => {
    await fetchPatientRecords()
        .then(data => res.status(200).json({ data }))
        .catch(error => res.status(500).json({ error }))
})

module.exports = router;