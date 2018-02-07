var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    text = fs.readFileSync('file.txt')
    res.end(text)
}).listen(process.env.PORT)