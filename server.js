const express = require('express')
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser')
const cors = require('cors');
const connectDb = require('./cofig/dbConnection');
const routes  = require('./routes');
const patient = require('./models/patientModels');
require("dotenv").config();

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
      origin: '*',
      methods: ['GET', 'POST'],
  }
});

const PORT = 3001
connectDb()

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());

app.get('/status', (req, res) => {
  res.send({ 'status': 'healthy' })
})

app.use('/', routes)

patient.watch([], { fullDocument: 'updateLookup' }).on('change', (change) => {
  io.emit('dataUpdated', change.fullDocument);
});

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})