const http = require('./app.js');

const port = 3000;

http.listen(port, ()=> {
    console.log('server is running on port', port);
})