const express = require('express')
const {createProxyMiddleware} = require('http-proxy-middleware')

const app = express()
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.use('/',
createProxyMiddleware({
    target: 'http://pfolio.site',
    changeOrigin: true
  })
)

module.exports = app