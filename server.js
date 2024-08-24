const express = require('express')
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser')
const cors = require('cors');
const connectDb = require('./cofig/dbConnection');
const routes  = require('./routes');
const patient = require('./models/patientModels');
const Disease = require('./models/diseaseModel');
const patientFiles = require('./models/fileModel');
require("dotenv").config();

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
      origin: '*',
      methods: ['GET', 'POST'],
  },
  path: '/socket.io',
  transports: ['websocket', 'polling'], 
  secure: true 
});

const PORT = 3001
connectDb()

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

app.get('/api-v2/status', (req, res) => {
  res.send({ 'status': 'healthy' })
})

app.use('/api-v2', routes)

patient.watch([], { fullDocument: 'updateLookup' }).on('change', (change) => {
  io.emit('dataUpdatedRecords', change.fullDocument);
});

Disease.watch([], { fullDocument: 'updateLookup' }).on('change', (change) => {
  io.emit('dataUpdatedDisease', change.fullDocument);
});

patientFiles.watch([], { fullDocument: 'updateLookup' }).on('change', (change) => {
  io.emit('dataUpdatedPatientFiles', change.fullDocument);
});

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})