var express = require('express');
const PORT = process.env.PORT || 5000

var app = express()
    .use('/', express.static(__dirname + '/public/')) // ← adjust
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))