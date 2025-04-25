const { log } = require('console');
const app = require('./app');
const http = require('http');

const PORT = 5000 ;

const server = http.createServer(app);

server.listen(PORT,()=>{
    log(`Server is running on port ${PORT}`);
})