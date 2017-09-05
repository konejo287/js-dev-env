import express from 'express'; //ES6 import fashion
var path = require('path');    //ES5 import fashion
import webpack from 'webpack';
import config from '../webpack.config.dev';

var open = require('open');

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler , {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  console.log('dirname = ' , __dirname);
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
