const express = require('express');
const req = require('express/lib/request');
const app = express();
const http = require('http').createServer(app);

app.set('port', 8080);
app.set('json spaces', 2)

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true,
}));
app.use('/albums', require('./routes/albums'));
app.use('/generos', require('./routes/generos'));
app.use('/cantantes', require('./routes/cantantes'));
app.get('/', (req, res)=> { res.sendFile(__dirname + '/index.html');});
app.listen(app.get('port'), () => {
    console.log(`Server working on port ${app.get('port')}`)
})
