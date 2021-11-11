require("./app.js");
const express = require('express')
const path = require('path')

const app = express();
const cors = require('cors');

//
app.set('port',3000)

app.use(cors({
    origin: '*'
}));

app.use('/', require('./routes'))

app.use('/public',express.static('public'))

app.listen(app.get('port'), () =>{
    console.log(`Server online, ${app.get('port')}`);
});

