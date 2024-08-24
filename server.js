const express = require('express')
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser')
const cors = require('cors');
const connectDb = require('./cofig/dbConnection');
const routes  = require('./routes');
const Patient = require('./models/patientModels');
const Disease = require('./models/diseaseModel');
const PatientFiles = require('./models/fileModel');
const { SOCKET_CONFIG } = require('./constants');
require("dotenv").config();

const app = express()
const server = http.createServer(app);
const io = new Server(server, SOCKET_CONFIG);
const PORT = 3001

connectDb()

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/api-v2', routes)

Patient.watch([], { fullDocument: 'updateLookup' }).on('change', (change) => {
  io.emit('dataUpdatedRecords', change.fullDocument);
});

Disease.watch([], { fullDocument: 'updateLookup' }).on('change', (change) => {
  io.emit('dataUpdatedDisease', change.fullDocument);
});

PatientFiles.watch([], { fullDocument: 'updateLookup' }).on('change', (change) => {
  io.emit('dataUpdatedPatientFiles', change.fullDocument);
});

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})