const SOCKET_CONFIG = {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
    path: '/socket.io',
    transports: ['websocket', 'polling'], 
    secure: true 
  }

module.exports = {
    SOCKET_CONFIG
};